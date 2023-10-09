<script setup lang="ts">
const error = useError();
</script>

<template>
  <div class="grid h-screen grid-cols-1 place-items-center">
    <div class="flex flex-col gap-4 text-center">
      <h1 class="text-6xl font-bold text-red-600">Error occurred!</h1>
      <h1 class="text-3xl font-bold text-red-400">
        {{
          error?.statusCode.toString().startsWith("4")
            ? "...and it's your fault?"
            : error?.statusCode.toString().startsWith("5")
            ? "We messed up"
            : "How did you get here?"
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
      <button class="btn btn-primary" @click="navigateTo('/')">
        Go home
      </button>
    </div>
  </div>
</template>
