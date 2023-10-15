<script setup lang="ts">
const { data, showProfileButtons, handleLogout } = defineProps(["data", "showProfileButtons", "handleLogout"]);
</script>

<template>
  <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
    <div class="page-container">
      <div class="profile-container">
        <img :src="data.avatarURL" alt="avatar" class="icon" />
        <h1 class="full_name">{{ data.full_name }}</h1>
        <h1 class="handle">
          @{{ data.handle }}
          {{ data.location && " • " + data.location }}
        </h1>
        <div class="flex gap-2" v-if="showProfileButtons">
          <button class="btn btn-primary" @click="navigateTo('/profile/edit')">
            {{ $t("user.profile.edit") }}
          </button>
          <button class="btn btn-error" @click="handleLogout">
            {{ $t("user.profile.logout") }}
          </button>
        </div>
      </div>
      <div class="side-info-container">
        <div class="items-container">
          <h1>{{ $t("user.profile.skills.title") }}</h1>
          <div class="items-wrapper">
            <div class="skill" v-for="skill in data.skills">
              {{ skill }}
            </div>
            <p v-if="!data.skills?.length">
              {{ $t("user.profile.skills.empty") }}
            </p>
          </div>
        </div>
        <div class="items-container">
          <h1>{{ $t("user.profile.interests.title") }}</h1>
          <div class="items-wrapper">
            <div class="interest" v-for="interest in data.interests">
              {{ interest }}
            </div>
            <p v-if="!data.interests?.length">
              {{ $t("user.profile.interests.empty") }}
            </p>
          </div>
        </div>
        <div class="items-container">
          <h1>{{ $t("user.profile.bio.title") }}</h1>
          <p>{{ data.bio?.length > 0 ? data.bio : $t("user.profile.bio.empty") }}</p>
        </div>
      </div>
    </div>
    <div class="divider">
      <h1>{{ $t("user.profile.introduction.title") }}</h1>
    </div>
    <div class="introduction">
      <pre>{{ data.introduction?.length > 0 ? data.introduction : $t("user.profile.introduction.empty") }}</pre>
    </div>
    <div class="divider">
      <h1>{{ $t("user.profile.connections") }}</h1>
    </div>
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
