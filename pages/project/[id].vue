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
    method: "POST",
    body: {
      id: project.author,
    }
  });

  project.author = JSON.parse(authorInfo.body)
} else {
  navigateTo('/learning');
}
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
    <div class="title-container">
      <h1 class="title">{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
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
          class="flex rounded-full gap-4 items-center shadow-lg justify-center mx-auto cursor-pointer bg-gradient-to-br from-purple-900 to-blue-800"
          @click="navigateTo(`/user/${project.author.handle}`)"
        >
          <img :src="project.author.avatarURL" class="w-28 rounded-full border-4 border-transparent" alt="AUTHOR AVATAR">
          <div class="flex flex-col pr-8">
            <h2 class="text-2xl font-bold text-white">{{ project.author.full_name }}</h2>
            <h2 class="text-lg text-neutral-400">@{{ project.author.handle }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-6xl font-bold text-center;
}

h1 {
  @apply text-4xl font-bold;
}

.title-container {
  @apply flex flex-col gap-2 items-center justify-center
}

.title-container p {
  @apply text-xl text-center text-neutral-500;
}
</style>