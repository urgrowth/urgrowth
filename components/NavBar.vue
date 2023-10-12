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
        <img class="icon" src="/icons/hamburger.png" alt="Menu" />
      </label>
    </div>
    <div
      class="logo-container navbar-center cursor-pointer"
      @click="navigateTo('/')"
    >
      <img src="/images/logo-black.svg" alt="Logo" />
      <h1>URGROWTH</h1>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/profile">
        <img class="rounded-full" :src="avatar" alt="Account" v-if="user" />
        <img class="icon" src="/icons/user.png" alt="Account" v-else />
      </NuxtLink>
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
  @apply rounded-full;
  width: 64px;
  height: 64px;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
}

.logo-container h1 {
  @apply text-xl font-bold md:text-2xl;
}
</style>
