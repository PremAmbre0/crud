<template>
    <v-card class="mx-auto" outlined width="100%" elevation="4">
        <v-img :src="thumbnail" contain height="200px"></v-img>
        <v-card-actions height="50px">
            <v-card-title tag="div">
                {{ name }}
            </v-card-title>
        </v-card-actions>
        <v-card-actions>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('delete')">
                        <v-icon> mdi-delete</v-icon>
                    </v-btn>
                </template>
                <span>Delete</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" @click.stop.prevent="$emit('openForm')">
                        <v-icon> mdi-image-edit</v-icon>
                    </v-btn>
                </template>
                <span>Open Dialog</span>
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
</template>

<script>
export default {
    props: {
        thumbnail: { type: String },
        name: { type: String }
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