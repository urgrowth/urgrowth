<script setup lang="ts">
const error = useError();
</script>

<template>
  <div class="grid grid-cols-1 h-screen place-items-center">
    <div class="flex flex-col gap-4 text-center">
      <h1 class="font-bold text-6xl text-red-600">Error occurred!</h1>
      <h1 class="font-bold text-3xl text-red-600">
        ...{{
        error.statusCode.toString().startsWith('4') ?
          "and it's your fault" :
          error.statusCode.toString().startsWith('5') ?
            "we messed up" :
            "how did you get here?"
        }}
      </h1>
      <div class="flex flex-col gap-0">
        <p class="text-base text-neutral-400">
          Error with status {{ error?.statusCode }}
        </p>
        <p class="text-base text-neutral-400">
          {{ error?.message }}
        </p>
      </div>
      <button class="btn btn-primary">
        <router-link to="/">Go Home</router-link>
      </button>
    </div>
  </div>
</template>