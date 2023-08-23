<template>
  <div class="image-uploader">
    <input type="file" @change="handleFileChange" />
    <div class="preview-container">
      <div v-if="selectedFile" class="image-preview">
        <img :src="imageUrl" alt="Selected Image" />
      </div>
      <div v-else class="no-image">No image selected</div>
    </div>
    <button @click="uploadImage" :disabled="!selectedFile">Upload</button>
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
      this.imageUrl = this.selectedFile
        ? URL.createObjectURL(this.selectedFile)
        : null;
    },
    uploadImage() {
      if (!this.selectedFile) {
        return;
      }

      // Simulate an image upload process
      // Replace this with your actual image upload logic
      setTimeout(() => {
        alert("Image uploaded successfully!");
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

.preview-container {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.image-preview img {
  max-width: 100%;
  max-height: 180px;
}

.no-image {
  color: #888;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
