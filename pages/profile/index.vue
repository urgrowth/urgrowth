<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const res = await $fetch("/api/getUser", {
  body: {
    id: user.value?.id,
    full_name: user.value?.user_metadata?.full_name,
    email: user.value?.email,
    createUser: true,
  },
  method: "POST",
});

if (res?.status !== 200) {
  createError({
    statusCode: res?.status,
    message: res?.body,
  });
}

const userData = JSON.parse(res?.body ?? {});

function logout() {
  supabase.auth.signOut();
  return navigateTo("/");
}
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
    <div class="page-container">
      <div class="profile-container">
        <img :src="userData?.avatarURL" alt="avatar" class="icon" />
        <h1 class="full_name">{{ userData?.full_name }}</h1>
        <h1 class="handle">
          @{{ userData?.handle }}
          {{ userData?.location && " • " + userData?.location }}
        </h1>
        <div class="flex gap-2">
          <button class="btn btn-primary" @click="navigateTo('/profile/edit')">
            EDIT PROFILE
          </button>
          <button class="btn btn-error" @click="logout">SIGN OUT</button>
        </div>
      </div>
      <div class="side-info-container">
        <div class="items-container">
          <h1>Skills</h1>
          <div class="items-wrapper">
            <div class="skill" v-for="skill in userData?.skills">
              {{ skill }}
            </div>
            <p v-if="!userData?.skills?.length">No skills added yet 😢</p>
          </div>
        </div>
        <div class="items-container">
          <h1>Interests</h1>
          <div class="items-wrapper">
            <div class="interest" v-for="interest in userData?.interests">
              {{ interest }}
            </div>
            <p v-if="!userData?.interests?.length">No interests added yet 😢</p>
          </div>
        </div>
        <div class="items-container">
          <h1>Mission</h1>
          <p>{{ userData?.bio }}</p>
        </div>
      </div>
    </div>
    <div class="divider"><h1>INTRODUCTION</h1></div>
    <div class="introduction">
      <p>
        {{ userData?.introduction }}
      </p>
    </div>
    <div class="divider"><h1>CONNECTIONS</h1></div>
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
  @apply text-base;
}
</style>
