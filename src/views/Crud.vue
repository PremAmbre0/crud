<template>
	<div>
		<div
			class="grouping-container"
			v-for="roomType in roomsGroupedByRoomStyles"
			:key="roomType"
		>
			<div class="grouping-container-category">
				{{
					roomType + `(${roomsGroupedByRoomStyles[roomType].length})`
				}}
			</div>
			<div class="cards-container">
				<card
					v-for="roomStyle in roomsGroupedByRoomStyles[roomType]"
					:key="roomStyle._id"
					:name="roomStyle.name"
					:thumbnail="roomStyle.thumbnail"
					:roomStyleDisabled="roomStyle.isDisabled"
					:id="roomStyle._id"
					@openForm="
						openDialogForm();
						setSelectedRoomStyle(roomStyle);
					"
					@delete="deleteData(roomStyle._id)"
					@moveRenders="handleMoveRenders(roomStyle._id)"
					@publishOptions="handlePublishOptions(roomStyle._id)"
				>
				</card>
			</div>
		</div>
		<v-btn
			class="add-thumbnail"
			fab
			dark
			color="indigo"
			@click="
				removeselectedTemplate();
				openDialogForm();
			"
		>
			<v-icon dark> mdi-plus </v-icon>
		</v-btn>
		<dialog-form
			:roomStyle="selectedRoomStyle"
			@refresh="getData()"
		></dialog-form>
		<v-overlay :value="showOverlayLoader">
			<v-progress-circular
				indeterminate
				color="#5243AA"
				size="64"
			></v-progress-circular>
		</v-overlay>
	</div>
</template>

<script>
import Card from "../components/Card.vue";
import DialogForm from "../components/DialogForm.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
	components: {
		Card,
		DialogForm,
	},
	data() {
		return {
			roomStyles: null,
			selectedRoomStyle: null,
			roomsGroupedByRoomStyles: [],
		};
	},
	beforeMount() {
		this.getData();
		this.fetchAllDynamicProperties();
	},
	computed: {
		...mapGetters(["showDialogForm", "showOverlayLoader"]),
		...mapGetters("crud", ["dynamicProperties"]),
	},
	methods: {
		...mapMutations(["openDialogForm", "openOverlayLoader"]),
		...mapActions("crud", [
			"getRoomStyles",
			"deleteRoomStyle",
			"moveRenders",
			"publishOptions",
			"fetchAllDynamicProperties",
		]),
		setSelectedRoomStyle(roomStyle) {
			this.selectedRoomStyle = roomStyle;
		},
		removeselectedTemplate() {
			this.selectedRoomStyle = null;
		},
		getData() {
			console.log("hii");
			this.getRoomStyles().then((data) => {
				this.roomStyles = data;
				this.groupingByRoomType();
			});
		},
		deleteData(id) {
			if (
				window.confirm("Are you sure you want to delete this roomStyle")
			) {
				this.openOverlayLoader();
				this.deleteRoomStyle({
					_id: id,
				}).then((response) => {
					console.log(response);
					this.getData();
				});
			}
		},
		handleMoveRenders(id) {
			if (window.confirm("Are you sure you want to Move the renders")) {
				this.openOverlayLoader();
				this.moveRenders({
					_id: id,
				}).then((response) => {
					console.log(response);
				});
			}
		},
		handlePublishOptions(id) {
			if (
				window.confirm(
					"Will publish all un publish Options , Are you sure you want to perform this action?"
				)
			) {
				this.openOverlayLoader();
				this.publishOptions({
					_id: id,
				}).then((response) => {
					console.log(response);
				});
			}
		},
		groupingByRoomType() {
			if (this.roomsGroupedByRoomStyles)
				this.roomsGroupedByRoomStyles = [];
			this.roomStyles.forEach((room) => {
				if (this.roomsGroupedByRoomStyles.includes(room.roomType)) {
					this.roomsGroupedByRoomStyles[room.roomType].push(room);
				} else {
					this.roomsGroupedByRoomStyles.push(room.roomType);
					this.roomsGroupedByRoomStyles[room.roomType] = [
						{ ...room },
					];
				}
			});
			console.log(this.roomsGroupedByRoomStyles);
		},
	},
};
</script>

<style lang="scss" scoped>
.grouping-container {
	margin: 2rem auto 0 auto;
	max-width: 90vw;

	&-category {
		font-size: 1.6rem;
		font-weight: 500;
	}
}

.cards-container {
	margin: 1rem auto;
	max-width: 90vw;
	display: grid;
	grid-column-gap: 1rem;
	grid-row-gap: 1.5rem;
	grid-template-columns: repeat(2, 48%);
	// grid-auto-rows: 50px;
}

.add-thumbnail {
	position: fixed;
	right: 5%;
	bottom: 3%;
}

@media (max-width: 500px) {
	.cards-container {
		grid-row-gap: 1.5rem;
		grid-template-columns: 98%;
	}
}

@media (min-width: 750px) {
	.cards-container {
		grid-column-gap: 2%;
		grid-row-gap: 1.5rem;
		grid-template-columns: repeat(2, 48%);
	}
}

@media (min-width: 1000px) {
	.cards-container {
		grid-column-gap: 2%;
		grid-row-gap: 1.5rem;
		grid-template-columns: repeat(3, 31.33%);
	}
}

@media (min-width: 1440px) {
	.cards-container {
		grid-column-gap: 2%;
		grid-row-gap: 1.5rem;
		grid-template-columns: repeat(4, 23%);
	}
}
</style>
