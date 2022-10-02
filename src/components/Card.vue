<template>
    <v-card class="mx-auto" outlined width="100%" elevation="4">
        <v-img :src="roomStyle.thumbnail" contain height="200px"></v-img>
        <v-card-title>
            {{ roomStyle.name }}
        </v-card-title>
        <v-card-actions>
            <v-btn icon>
                <v-icon> mdi-delete</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon> mdi-eye</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon> mdi-download</v-icon>
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
        roomStyle: { required: true, type: Object }
    },
}

</script>

<style lang="scss" scoped>
.v-card {
    padding: 1rem 1rem 0 1rem;

    &__text {}
}
</style>""