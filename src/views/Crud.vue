<template>
    <div>
        <div class="cards-container">
            <card v-for="roomStyle in roomStyles" :key="roomStyle._id" :name="roomStyle.name" :thumbnail="roomStyle.thumbnail" 
                @openForm="openDialogForm() ; setSelectedRoomStyle(roomStyle)" @delete="deleteData(roomStyle._id)">
            </card>
        </div>
        <v-btn class="add-thumbnail" fab dark color="indigo" @click="removeselectedTemplate() ; openDialogForm()">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
        <dialog-form :roomStyle="selectedRoomStyle" @refresh="getData();"></dialog-form>
        <v-overlay :value="showOverlayLoader">
            <v-progress-circular indeterminate color="#5243AA" size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import DialogForm from '../components/DialogForm.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    components: {
        Card, DialogForm
    },
    data() {
        return {
            roomStyles: null,
            selectedRoomStyle: null,
        }
    },
    beforeMount() {
        this.getData();
    },
    computed: {
        ...mapGetters(["showDialogForm", "showOverlayLoader"]),
    },
    methods: {
        ...mapMutations(["openDialogForm","openOverlayLoader"]),
        ...mapActions("crud", ["getRoomStyles", "deleteRoomStyle"]),
        setSelectedRoomStyle(roomStyle) {
            this.selectedRoomStyle = roomStyle;
        },
        removeselectedTemplate() {
            this.selectedRoomStyle = null;
        },
        getData() {
            console.log("hii")
            this.getRoomStyles().then((data) => {
                this.roomStyles = data
            })
        },
        deleteData(id) {
            if (window.confirm("Are you sure you want to delete this roomStyle")) {
                this.openOverlayLoader();
                this.deleteRoomStyle({
                    _id: id
                }).then((response) => {
                    console.log(response)
                    this.getData();
                });
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.cards-container {
    margin: 2rem auto;
    max-width: 80vw;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2%;
    grid-template-columns: repeat(2, 48%);
}

.add-thumbnail {
    position: fixed;
    right: 5%;
    bottom: 3%;
}

@media (max-width: 500px) {
    .cards-container {
        grid-row-gap: 2%;
        grid-template-columns: 98%;
    }
}

@media (min-width: 750px) {
    .cards-container {
        grid-column-gap: 2%;
        grid-row-gap: 2%;
        grid-template-columns: repeat(3, 31.33%);
    }
}

@media (min-width: 1000px) {
    .cards-container {
        grid-column-gap: 2%;
        grid-row-gap: 2%;
        grid-template-columns: repeat(4, 23%);
    }
}

@media (min-width: 1440px) {
    .cards-container {
        grid-column-gap: 2%;
        grid-row-gap: 2%;
        grid-template-columns: repeat(5, 18%);
    }
}
</style>