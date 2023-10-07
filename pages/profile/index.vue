<script setup>
definePageMeta({
  middleware: ['auth']
})

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const res = await $fetch("/api/getUser", {
  body: {
    id: user.value?.id
  },
  method: "POST"
})

const userData = JSON.parse(res?.body ?? {});

if (res?.status !== 200) {
  alert("Something went wrong");
  navigateTo("/");
}

function logout() {
  supabase.auth.signOut();
  return navigateTo("/");
}
</script>

<template>
  <div class="flex flex-col gap-4 md:px-12 md:py-6 px-4 py-2">
    <div class="page-container">
      <div class="profile-container">
        <img :src="userData?.avatarURL" alt="avatar" class="icon">
        <h1 class="full_name">{{ userData?.full_name }}</h1>
        <h1 class="handle">@{{ userData?.handle }}</h1>
        <div class="flex gap-2">
          <button class="btn btn-primary" @click="navigateTo('/profile/edit')">EDIT PROFILE</button>
          <button class="btn btn-error" @click="logout">SIGN OUT</button>
        </div>
      </div>
      <div class="side-info-container">
        <div class="items-container">
          <h1>Skills</h1>
          <div class="items-wrapper" >
            <div class="skill" v-for="skill in userData?.skills">
              {{ skill }}
            </div>
            <p v-if="!userData?.skills?.length">No skills added yet 😢</p>
          </div>
        </div>
        <div class="items-container">
          <h1>Interests</h1>
          <div class="items-wrapper" >
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
  @apply grid md:grid-cols-2 grid-cols-1 w-full;
}

.profile-container {
  @apply flex flex-col gap-2 items-center justify-center;
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
  @apply rounded-full bg-gradient-to-tr from-blue-900 to-blue-600 text-white text-sm px-4 py-2;
}

.interest {
  @apply rounded-full bg-gradient-to-tr from-green-900 to-green-600 text-white text-sm px-4 py-2;
}

.introduction p {
  @apply text-base;
}
</style>