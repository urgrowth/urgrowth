<script setup lang="ts">
const slug = useRoute().params.slug;

const res = await $fetch("/api/user", {
  query: {
    handle: slug,
  },
  method: "GET",
});
const data = res.status === 200 ? JSON.parse(res?.body) : null;
</script>

<template>
  <UserCard
    v-if="data && res.status === 200"
    :data="data"
    :show-profile-buttons="false"
  />
  <div class="grid w-full grid-cols-1 place-items-center" v-else>
    <Modal
      :title="$t('modal.title.error')"
      :description="$t('user.profile.notFound')"
      end="ok"
      :handle-on-close="() => navigateTo('/')"
    />
  </div>
</template>

<style scoped>
h1 {
  @apply text-2xl font-bold;
}

.page-container {
  @apply grid w-full grid-cols-1 md:grid-cols-2;
}

.profile-container {
  @apply flex flex-col items-center justify-center gap-2;
  animation: gradient 5s ease-in-out infinite;
  background-size: 400% 400%;
}

.profile-container .icon {
  @apply rounded-full;
  height: 128px;
  width: 128px;
}

.profile-container .full_name {
  @apply text-3xl font-bold;
}

.profile-container .handle {
  @apply text-xl text-neutral-400;
}

.side-info-container {
  @apply flex flex-col gap-4;
}

.side-info-container .items-container {
  @apply flex flex-col gap-2;
}

.side-info-container .items-wrapper {
  @apply flex flex-row gap-2;
}

.side-info-container .items-container p {
  @apply text-sm;
}

.skill {
  @apply rounded-full bg-gradient-to-tr from-blue-900 to-blue-600 px-4 py-2 text-sm text-white;
}

.interest {
  @apply rounded-full bg-gradient-to-tr from-green-900 to-green-600 px-4 py-2 text-sm text-white;
}

.introduction p {
  @apply text-sm;
}
</style>
