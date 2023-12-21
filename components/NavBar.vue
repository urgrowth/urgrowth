<script setup lang="ts">
import { md5 } from "~/lib/md5";
const user = useSupabaseUser();

const avatar = `https://www.gravatar.com/avatar/${md5(
  user.value?.email ?? "",
)}?d=mp&s=48`;
</script>

<template>
  <nav class="mb-6">
    <div class="navbar-start">
      <label for="my-drawer">
        <img class="icon" src="/icons/hamburger.svg" alt="Menu" />
      </label>
    </div>
    <div
      class="logo-container navbar-center cursor-pointer"
      @click="navigateTo('/')"
    >
      <img src="/images/beta.png" alt="Logo" />
    </div>
    <div class="navbar-end">
      <a href="/profile">
        <img class="rounded-2xl" :src="avatar" alt="Account" v-if="user" />
        <img class="icon" src="/icons/user.png" alt="Account" v-else />
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply navbar bg-blend-normal;
}

.logo-container {
  @apply navbar-center flex justify-center;
}

.logo-container img {
  height: 64px;

  @media screen and (max-width: 768px) {
    height: 48px;
  }
}

.logo-container h1 {
  @apply text-xl font-bold md:text-2xl;
}
</style>
