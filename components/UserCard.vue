<script setup lang="ts">
const { data, showProfileButtons, handleLogout } = defineProps([
  "data",
  "showProfileButtons",
  "handleLogout",
]);
import { render } from "~/lib/render";
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
        <div class="skills-and-interests">
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
        </div>
        <div class="items-container bg-[#FFB005] min-h-[20vh] p-8 rounded-2xl">
          <h1 class="text-center">{{ $t("user.profile.bio.title") }}</h1>
          <p class="text-justify text-xl">
            {{ data.bio?.length > 0 ? data.bio : $t("user.profile.bio.empty") }}
          </p>
        </div>
      </div>
    </div>
<!--    <div class="divider">-->
<!--      <h1>{{ $t("user.profile.introduction.title") }}</h1>-->
<!--    </div>-->
    <div class="introduction bg-base-100" v-html="render(data.introduction || '')"></div>
<!--    <div class="divider">-->
<!--      <h1>{{ $t("user.profile.accomplishment") }}</h1>-->
<!--    </div>-->
    <div class="acc-container">
      <h1>{{ $t("user.profile.accomplishment") }}</h1>
      <div class="items-wrapper">
        <div
          class="card w-96 border bg-base-100"
          v-for="id in data.accomplishment"
        >
          <div class="card-body bg-white text-black rounded-2xl">
            <h2 class="text-center text-2xl font-bold">
              {{ $t(`user.accomplishment[${id - 1}].title`) }}
            </h2>
            <p>{{ $t(`user.accomplishment[${id - 1}].description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  @apply text-2xl font-bold;
}

.page-container {
  @apply grid w-full grid-cols-1 lg:grid-cols-2 gap-4;
}

.profile-container {
  @apply flex flex-col items-center justify-center gap-2 bg-emerald-800 text-white rounded-2xl p-8;
}

.profile-container .icon {
  @apply rounded-2xl;
  height: 128px;
  width: 128px;
}

.profile-container .full_name {
  @apply text-3xl font-bold;
}

.profile-container .handle {
  @apply text-xl text-neutral-300;
}

.side-info-container {
  @apply flex flex-col gap-4;
}

.side-info-container .items-container {
  @apply flex flex-col gap-2;
}

.side-info-container .items-wrapper {
  @apply flex flex-row gap-2 justify-center;
}

.skills-and-interests {
  @apply flex flex-col gap-4 text-center p-8 bg-blue-800 text-white rounded-2xl;
}

.skill {
  @apply rounded-full px-4 py-2 text-sm bg-indigo-200 text-black font-bold;
}

.interest {
  @apply rounded-full px-4 py-2 text-sm bg-indigo-200 text-black font-bold;
}

.introduction {
  @apply min-h-[50vh] rounded-2xl bg-white p-8;
}

.introduction p {
  @apply text-sm;
}

.acc-container {
  @apply flex flex-col gap-4 bg-red-800 p-8 rounded-2xl text-white;
}
</style>
