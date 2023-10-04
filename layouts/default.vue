<template>
  <LazyNuxtLoadingIndicator id="nli" color="#f28c18" class="p-1" />
  <div class="page-layouts">
    <NavBar />
    <slot />
  </div>
  <Footer />
</template>
<script setup lang="ts">
</script>