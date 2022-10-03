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
import { mapGetters, mapMutations } from 'vuex';
export default {
    components: {
        Card, DialogForm
    },
    data() {
        return {
            roomStyles: {
                roomStyle1: {
                    _id: "c533a8c0-4299-11ed-b37-59ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/200/300",
                    name: "string",
                    roomType: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle2: {
                    _id: "c533a8c0-4299-1ed-b3e7-59ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/300/300",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle3: {
                    _id: "c533a8c0-4299-11ed-b3e7-5ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/900/300",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle4: {
                    _id: "c5338c0-4299-11ed-b3e7-59ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/200/900",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle5: {
                    _id: "c533a8c0-4299-11ed-b3e7-59ea93b460e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    roomType: "string",
                    thumbnail: "https://picsum.photos/1200/3300",
                    name: "stringjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle6: {
                    _id: "c533a8c0-499-11ed-b3e7-59ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/20/30",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle7: {
                    _id: "c533a8c0-4299-11ed-b3e7-59e93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    roomType: "string",
                    thumbnail: "https://picsum.photos/200/300",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle8: {
                    _id: "c533a8c0-4299-11ed-be7-5ea93b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    roomType: "string",
                    thumbnail: "https://picsum.photos/200/300",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle9: {
                    _id: "c533a8c0-4299-1ed-b37-59ea93b660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    roomType: "string",
                    thumbnail: "https://picsum.photos/200/300",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                }, roomStyle10: {
                    _id: "533a8c0-4299-11e-b3e7-59ea9b4660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/200/300",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
                roomStyle11: {
                    _id: "c533a8c0-299-11d-be7-59ea934660e",
                    projectId: "ca8644e0-4299-11ed-9660-8bb0fb210de9",
                    thumbnail: "https://picsum.photos/200/300",
                    roomType: "string",
                    name: "string",
                    description: "stringhttps://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300https://picsum.photos/200/300",
                },
            },
            selectedRoomStyle: null,
        }
    },
    computed: {
        ...mapGetters(["showDialogForm"]),
    },
    methods: {
        ...mapMutations(["openDialogForm"]),
        setSelectedRoomStyle(roomStyle) {
            this.selectedRoomStyle = roomStyle;
        },
        removeselectedTemplate() {
            this.selectedRoomStyle = {};
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