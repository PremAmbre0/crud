<template>
    <div>
        <v-dialog v-model="showDialogForm" max-width="600" persistent>
            <v-card max-width="600">
                <v-form @submit.prevent>
                    <v-text-field width="50vw" :rules="rules.notEmpty" required outlined placeholder="name" label="name"
                        v-model="formData.name">
                    </v-text-field>
                    <v-text-field width="50vw" :rules="rules.notEmpty" required outlined placeholder="projectId"
                        label="projectId" v-model="formData.projectId">
                    </v-text-field>
                    <v-text-field width="50vw" :rules="rules.notEmpty" required outlined placeholder="roomType"
                        label="roomType" v-model="formData.roomType">
                    </v-text-field>
                    <v-textarea outlined name="input-7-4" label="Description" v-model="formData.description">
                    </v-textarea>
                    <div class="droparea" @dragover.prevent @drop.stop.prevent>
                        <div class="droparea-filled" v-if="existingPreviewImage || inputedPreviewImage">
                            <div class="file-wrapper">
                                <v-btn class="close-btn" tile elevation="2" x-small @click="removeImage()">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <img ref="fileInput" class="img"
                                    :src="existingPreviewImage ? existingPreviewImage : inputedPreviewImage" />
                            </div>
                        </div>
                        <div class="droparea-empty" v-else>
                            <label for="fileInput" class="label">
                                Click here to select and preview the file</label>
                            <input ref="fileInput" type="file" @input="pickImagefile($event)" id="fileInput" />
                        </div>
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn plain color="#BF2600" @click="closeDialogForm()">cancel</v-btn>
                        <v-btn plain color="#00875A" type="submit" @click="submitFormData()">submit</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <v-overlay :value="showOverlayLoader">
            <v-progress-circular indeterminate color="#5243AA" size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    props: {
        roomStyle: {
            type: Object,
            required: false,
        }
    },
    data() {
        return {
            formData: {},
            inputedPreviewImage: null,
            existingPreviewImage: null,
            inputedFileObject: null,
            mode: '',
            rules: {
                notEmpty: [val => (val || '').length > 0 || 'This field is required'],
            },
        }
    },
    computed: {
        ...mapGetters(["showDialogForm", "showOverlayLoader"]),
    },
    watch: {
        showDialogForm(newValue) {
            if (newValue == true) {
                this.setInitialFormData();
            }
            if (newValue == false) {
                this.inputedFileObject = null;
                this.inputedPreviewImage = null,
                    this.existingPreviewImage = null,
                    this.resetFormData();
            }
        }
    },
    methods: {
        ...mapMutations(["closeDialogForm", "openOverlayLoader"]),
        ...mapActions("crud", ["postRoomStyles", "updateRoomStyles"]),
        setInitialFormData() {
            if (this.roomStyle) {
                this.formData = JSON.parse(JSON.stringify(this.roomStyle));
                this.existingPreviewImage = this.roomStyle.thumbnail;
                this.mode = "edit";
            } else {
                this.existingPreviewImage = "";
                this.mode = "new";
            }
        },
        pickImagefile(e) {
            let inputedImage = e.target.files[0]
            if (inputedImage) {
                this.inputedFileObject = inputedImage;
                this.inputedPreviewImage = URL.createObjectURL(inputedImage);
            }
        },
        resetFormData() {
            this.formData = {}
        },
        removeImage() {
            if (this.inputedPreviewImage) {
                this.inputedPreviewImage = ""
            } else if (this.existingPreviewImage) {
                this.existingPreviewImage = ""
            }
        },
        submitFormData() {
            this.openOverlayLoader();
            let data = new FormData();
            this.formData.description ? data.append('description', this.formData.description.trim()) :  data.append('description', this.formData.description) 
            this.formData.projectId ? data.append('projectId', this.formData.projectId.trim()) : data.append('projectId', this.formData.projectId);
            this.formData.name ? data.append('name', this.formData.name.trim()) : data.append('name', this.formData.name);
            this.formData.roomType ? data.append('roomType', this.formData.roomType.trim()) : data.append('roomType', this.formData.roomType);
            data.append('file', this.inputedFileObject);
            if (this.mode == "new") {
                this.postRoomStyles(data)
                    .then((response) => {
                        console.log(response)
                        this.$emit('refresh');
                    })
            } else {
                data.append('_id', this.formData._id);
                console.log(...data)
                this.updateRoomStyles(data)
                    .then((response) => {
                        console.log(response)
                        this.$emit('refresh');
                    })
            }
            this.closeDialogForm();
        }
    }
}
</script>

<style lang="scss" scoped>
.v-card {
    padding: 5%;
}

.droparea {
    display: block;
    height: 50vh;
    width: 100%;

    &-empty {
        height: 100%;
        width: 100%;
        background-color: $light-three;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        padding: 5%;
        text-align: center;
        color: $light-one;
        font-weight: 500;
        border-radius: 0.5rem;
        position: relative;
    }

    &-filled {
        display: flex;
        justify-content: center;
        height: 90%;
    }
}

.img {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
}

.label {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
}

input[type="file"] {
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
}

.file-wrapper {
    position: relative;
}

.v-btn.close-btn {
    position: absolute;
    top: 0;
    right: 0;
}

.v-icon {
    font-size: 1rem;
}
</style>
    