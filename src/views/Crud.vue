<template>
    <div>
        <div class="cards-container">
            <card v-for="roomStyle in roomStyles" :key="roomStyle._id" :roomStyle="roomStyle"
                @click.native="openDialogForm() ; setSelectedRoomStyle(roomStyle)"></card>
        </div>
        <v-btn class="add-thumbnail" fab dark color="indigo" @click="removeselectedTemplate() ; openDialogForm()">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
        <dialog-form :roomStyle="selectedRoomStyle"></dialog-form>
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
    beforeMount(){
        this.getData();
    },
    computed: {
        ...mapGetters(["showDialogForm"]),
    },
    methods: {
        ...mapMutations(["openDialogForm"]),
        ...mapActions("crud",["getRoomStyles"]),
        setSelectedRoomStyle(roomStyle) {
            this.selectedRoomStyle = roomStyle;
        },
        removeselectedTemplate() {
            this.selectedRoomStyle = {};
        },
        getData(){
            this.getRoomStyles().then((data)=>{
                console.log(data);
                this.roomStyles = data
            })
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