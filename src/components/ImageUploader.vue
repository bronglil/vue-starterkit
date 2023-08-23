<template>
  <div class="image-uploader">
    <input type="file" @change="handleFileChange" />
    <button @click="uploadImage" :disabled="!selectedFile">Upload</button>
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Uploaded Image" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedFile: null,
      imageUrl: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.imageUrl = null; // Reset image URL when selecting a new file
    },
    uploadImage() {
      if (!this.selectedFile) {
        return;
      }

      // Simulate an image upload process
      // Replace this with your actual image upload logic
      setTimeout(() => {
        this.imageUrl = URL.createObjectURL(this.selectedFile);
      }, 1000);
    },
  },
};
</script>
<style scoped>
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

img {
  max-width: 100%;
  max-height: 300px;
  margin-top: 10px;
}
</style>
