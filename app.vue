<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>