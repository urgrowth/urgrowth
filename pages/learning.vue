<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

let page = ref(1);
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
    <div class="page-layouts">
      <div class="grid grid-cols-1 gap-12">
        <div
          class="title flex h-min flex-col items-center gap-6 rounded bg-gradient-to-tr from-blue-700 to-blue-600 py-12 text-white"
        >
          <span class="text-5xl font-black uppercase">{{
            $t("learning.progress")
          }}</span>
          <ul class="steps steps-horizontal w-full px-2 text-base">
            <li class="step step-primary">
              {{ $t("learning.steps[0]") }}
            </li>
            <li :class="'step' + (page > 1 ? ' step-primary' : '')">
              {{ $t("learning.steps[1]") }}
            </li>
            <li :class="'step' + (page > 2 ? ' step-primary' : '')">
              {{ $t("learning.steps[2]") }}
            </li>
            <li :class="'step' + (page > 3 ? ' step-primary' : '')">
              {{ $t("learning.steps[3]") }}
            </li>
            <li :class="'step' + (page > 4 ? ' step-primary' : '')">
              {{ $t("learning.steps[4]") }}
            </li>
          </ul>
          <div class="flex w-full justify-evenly">
            <button
              class="btn btn-error"
              :disabled="page === 1"
              @click="page--"
            >
              {{ $t("modal.end.previous") }}
            </button>
            <button
              class="btn btn-success"
              :disabled="page === 5"
              @click="page++"
            >
              {{ $t("modal.end.next") }}
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="title text-center">
            {{ $t(`learning.steps[${page - 1}]`) }}
          </h1>
          <iframe
            class="m-auto aspect-video w-1/2 rounded border-none py-6 shadow-lg"
            src="https://www.youtube.com/embed/hBSIrdadfi4?si=6T7m-R6zB4UPFGdv"
            title="YouTube video player"
            allow=""
            allowfullscreen
          ></iframe>
          <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-6xl font-black;
}

h1 {
  @apply text-2xl font-bold;
}
</style>
