<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const { body } = await $fetch("/api/project", {
  method: "GET",
});

const projects = JSON.parse(body);
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
    <div class="page-layouts">
      <div class="title flex items-center gap-4">
        <img src="/icons/book.png" alt="Learning" class="w-12" />
        LEARNING
      </div>
      <div class="flex flex-col gap-2">
        <h1>✨ Latest Projects</h1>
        <div
          class="grid w-full grid-cols-1 justify-items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :data="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply mb-12 text-6xl font-bold;
}

h1 {
  @apply text-2xl font-bold;
}
</style>
