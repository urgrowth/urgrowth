<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>

<template>
  <div class="card w-full h-auto bg-base-100 shadow-xl image-full">
    <figure><img
      :src="`https://rdeytruriwzymdflpcfv.supabase.co/storage/v1/object/public/projectInfo/project_card_${data.id}.png`"
      alt="PROJECT CARD" /></figure>
    <div class="card-body">
      <h2 class="card-title text-3xl justify-center">{{ data.name }}</h2>
      <p>{{ data.description }}</p>
      <div class="card-actions mt-8">
          <button
            @click="navigateTo(`/project/${data.id}`)"
            class="btn btn-primary w-full">
            VIEW PROJECT
          </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card.image-full::before {
  z-index: 0;
}

.card.image-full > .card-body {
  z-index: 1;
}
</style>