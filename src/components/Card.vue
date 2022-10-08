<template>
    <v-card class="mx-auto" outlined width="100%" elevation="4">
        <v-img :src="thumbnail" contain height="200px"></v-img>
        <v-card-actions height="50px">
            <v-card-title tag="div">
                {{ name }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop.prevent="$emit('delete')">
                <v-icon> mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click.stop.prevent="$emit('openForm')"> 
                <v-icon>  mdi-image-edit</v-icon>
            </v-btn>
        </v-card-actions>
        <!-- <v-card-text>
            {{roomStyle.description}}
        </v-card-text> -->
    </v-card>
</template>

<script>
export default {
    props: {
        thumbnail: { required: true, type: String },
        name: { required: true, type: String }
    },
}

</script>

<style lang="scss" scoped>
.v-card {
    padding: 1rem 1rem 0 1rem;

    &__title {
        max-width: 80%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>""