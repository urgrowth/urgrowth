<script setup lang="ts">
const { title, description, end, show, handleOnClose } = defineProps(["title", "description", "end", "show", "handleOnClose"]);
</script>

<template>
  <dialog id="my_modal_1" class="modal" v-bind:open="show ?? true">
    <div class="modal-box">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <p class="py-4">{{ description }}</p>
      <div class="modal-action">
        <form method="dialog" @submit="handleOnClose()">
          <button class="btn">{{ (end && $t(`modal.end.${end}`)) ?? "ok" }}</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50;
}

.modal-box {
  @apply text-center
}
</style>