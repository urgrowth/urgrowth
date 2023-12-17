<script setup lang="ts">
const { handle } = useRoute().params;

const res = await $fetch("/api/user", {
  body: {
    handle,
  },
  method: "POST",
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
