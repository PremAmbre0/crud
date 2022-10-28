<template>
    <div>
        <v-overlay :value="showOverlayLoader">
            <v-progress-circular indeterminate color="#5243AA" size="64"></v-progress-circular>
        </v-overlay>
        <v-card class="mx-auto" outlined width="100%" elevation="4">
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn-toggle mandatory v-model="handleToggleRoomstyle">
                    <v-btn @click="() => {
                        this.toggleDisableRoomstyle = true;
                        this.updateIsDisabledRoomStyleProperty()
                    }">Disabled</v-btn>
                    <v-btn @click="() => {
                        this.toggleDisableRoomstyle = false;
                        this.updateIsDisabledRoomStyleProperty()
                    }">Enabled</v-btn>
                </v-btn-toggle>
            </v-card-actions>
            <v-img :src="thumbnail" contain height="200px"></v-img>
                <v-card-title tag="div">
                    {{ name ? name : "   "}}
                </v-card-title>
            <v-card-actions>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('delete')">
                            <v-icon> mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    <span>Delete room</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('openForm')">
                            <v-icon> mdi-image-edit</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit room</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('moveRenders')">
                            <v-icon> mdi-sync-circle</v-icon>
                        </v-btn>
                    </template>
                    <span>Move renders</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('publishOptions')">
                            <v-icon> mdi-file-powerpoint-box</v-icon>
                        </v-btn>
                    </template>
                    <span>Publish options (will publish all unpublish options)</span>
                </v-tooltip>
            </v-card-actions>
            <!-- <v-card-text>
                {{roomStyle.description}}
            </v-card-text> -->
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
export default {
    data() {
        return {
            toggleDisableRoomstyle: null,
            handleToggleRoomstyle: null,
        }
    },
    beforeMount() {
        if (this.roomStyleDisabled == false) {
            this.toggleDisableRoomstyle = false;
            this.handleToggleRoomstyle = 1;
        }
        else if (this.roomStyleDisabled == true) {
            this.toggleDisableRoomstyle = true;
            this.handleToggleRoomstyle = 0;
        }
    },
    props: {
        thumbnail: { type: String },
        name: { type: String },
        roomStyleDisabled: { type: Boolean },
        id: { type: String }
    },
    computed: {
        ...mapGetters(["showOverlayLoader"]),
    },
    methods: {
        ...mapMutations(["openOverlayLoader"]),
        ...mapActions("crud", ["updateRoomStyles"]),
        updateIsDisabledRoomStyleProperty() {
            if (window.confirm("Are you sure, you want to perform this action?")) {
                this.openOverlayLoader();
                let data = new FormData();
                data.append('isDisabled', this.toggleDisableRoomstyle);
                data.append('_id', this.id);
                data.append('name', this.name);
                this.updateRoomStyles(data)
                    .then((response) => {
                        console.log(response)
                    })
            }
        }
    },
}

</script>

<style lang="scss" scoped>
.v-card {
    padding: 1rem 1rem 0 1rem;

    &__title {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>""