<template>
  <div class="github-card">
    <div class="user-info">
      <img :src="userData.avatar_url" alt="GitHub Avatar" class="avatar" />
      <h2 class="username">{{ userData.login }}</h2>
    </div>
    <div class="user-stats">
      <div class="stat">
        <strong>Followers:</strong> {{ userData.followers }}
      </div>
      <div class="stat">
        <strong>Following:</strong> {{ userData.following }}
      </div>
      <div class="stat">
        <strong>Repos:</strong> {{ userData.public_repos }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
  data() {
    return {
      userData: {},
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${this.username}`
        );
        if (response.ok) {
          this.userData = await response.json();
        } else {
          console.error("Failed to fetch GitHub user data");
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching GitHub user data",
          error
        );
      }
    },
  },
};
</script>

<style scoped>
.github-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.username {
  margin-top: 10px;
  font-size: 1.5rem;
}

.user-stats {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.stat {
  text-align: center;
}
</style>
