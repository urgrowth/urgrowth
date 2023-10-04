<template>
  <LazyNuxtLoadingIndicator color="#f28c18" class="p-1" />
  <div class="page-layouts">
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <NavBar />
        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-64 min-h-full backdrop-blur-md bg-white/75  text-base-content font-bold">
          <li><NuxtLink to="/"><img src="/icons/home.png" alt="Home" class="w-6">Home</NuxtLink></li>
          <li><NuxtLink to="/advices"><img src="/icons/info.png" alt="Advices" class="w-6">Advices</NuxtLink></li>
          <li><NuxtLink to="/learning"><img src="/icons/book.png" alt="Learning" class="w-6">Learning</NuxtLink></li>
          <li><NuxtLink to="/my-plans"><img src="/icons/target.png" alt="My Plans" class="w-6">My Plans</NuxtLink></li>
          <li><NuxtLink to="/suggestions"><img src="/icons/discuss.png" alt="Suggestions" class="w-6">Suggestions</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.drawer-side {
  z-index: 2;
}
</style>
<script setup lang="ts">
</script>