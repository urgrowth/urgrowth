<template>
  <nav>
    <div class="navbar-start">
      <label for="my-drawer">
        <img class="icon" src="/icons/hamburger.png" alt="Menu" />
      </label>
    </div>
    <div class="cursor-pointer logo-container navbar-center" @click="navigateTo('/')">
      <img src="/images/logo-black.svg" alt="Logo" />
      <h1>URGROWTH</h1>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/profile">
        <img class="icon" src="/icons/user.png" alt="Account" />
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
<script setup lang="ts">
</script>