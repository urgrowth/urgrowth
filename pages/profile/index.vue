<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { md5 } from "~/lib/md5.js";
const user = useSupabaseUser();
const supabase = useSupabaseClient();
let userData;

let { body: data, res } = await $fetch("/api/user", {
  body: {
    id: user.value?.id,
    email: user.value?.email,
  },
  method: "POST",
});

if (!data) {
  const res = await $fetch("/api/user", {
    body: {
      id: user.value?.id,
      full_name: user.value?.user_metadata?.full_name,
      email: user.value?.email,
      createUser: true,
    },
    method: "PUT",
  });
  if (res?.status !== 200) {
    createError({
      statusCode: res?.status,
      message: res?.body,
    });
  }
  userData = reactive(JSON.parse(res?.body ?? {}));
} else {
  userData = reactive(JSON.parse(data));
}

userData.avatarURL = `https://www.gravatar.com/avatar/${md5(
  userData.email,
)}?d=retro&size=128`;

function logout() {
  supabase.auth.signOut();
  return navigateTo("/");
}
</script>

<template>
  <UserCard
    v-if="userData"
    :data="userData"
    :show-profile-buttons="true"
    :handle-logout="logout"
  />
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
  @apply text-base;
}
</style>
