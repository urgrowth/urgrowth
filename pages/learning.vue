<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});

const { body: projects } = await $fetch("/api/project", {
  method: "GET",
});
</script>

<template>
  <div class="page-layouts">
    <title class="divider">Learning</title>
    <div class="flex flex-col gap-2">
      <h1>Latest Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch w-full">
        <ProjectCard v-for="project in projects" :key="project.id" :data="project" />
      </div>
    </div>
  </div>
</template>

<style scoped>
title {
  @apply text-6xl font-bold text-center mb-12;
}

h1 {
  @apply text-2xl font-bold;
}
</style>