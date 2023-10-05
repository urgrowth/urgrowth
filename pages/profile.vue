<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const user = useSupabaseUser();
</script>

<template>
  <div>
    <p class="u-text-black">
      Hi <span class="u-text-primary">{{ user.email }}</span>
    </p>
  </div>
</template>
