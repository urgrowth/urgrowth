<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});

const { id } = useRoute().params;
const { body: project } = await $fetch("/api/project", {
  method: "POST",
  body: {
    id,
  }
});

let authorInfo;

if (project) {
  authorInfo = await $fetch("/api/user", {
    method: "GET",
    query: {
      id: project.author,
    }
  });

  project.author = JSON.parse(authorInfo.body)
} else {
  navigateTo('/learning');
}
</script>

<template>
  <div class="page-layouts">
    <title class="divider">{{ project.name }}</title>
    <img :src="`https://rdeytruriwzymdflpcfv.supabase.co/storage/v1/object/public/projectInfo/project_card_${project.id}.png`" class="mt-12 my-6 mx-auto rounded-md" alt="PROJECT CARD">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-4">
        <h1>Purpose</h1>
        <pre>{{ project.purpose }}</pre>
      </div>
      <div class="flex flex-col gap-4">
        <h1>How to create?</h1>
        <pre>{{ project.create }}</pre>
      </div>
      <div class="flex flex-col gap-4">
        <h1>Results</h1>
        <pre>{{ project.result }}</pre>
      </div>
      <div class="flex flex-col gap-4">
        <h1>Author</h1>
        <div
          class="flex gap-4 items-center justify-center border mx-auto p-4 rounded-md border-white cursor-pointer bg-gradient-to-br from-purple-900 to-blue-800"
          @click="navigateTo(`/user/${project.author.handle}`)"
        >
          <img :src="project.author.avatarURL" class="w-28 rounded-full shadow-lg" alt="AUTHOR AVATAR">
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold text-white">{{ project.author.full_name }}</h1>
            <h2 class="text-xl text-neutral-400">@{{ project.author.handle }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
title {
  @apply text-6xl font-bold text-center mb-12;
}

h1 {
  @apply text-4xl font-bold;
}
</style>