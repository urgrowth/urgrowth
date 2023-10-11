<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { location } from "~/data/location.js";
const user = useSupabaseUser();

const res = await $fetch("/api/user", {
  query: {
    id: user.value?.id,
    email: user.value?.email,
  },
  method: "GET",
});

const i18n = useI18n();
const error = ref("");
const success = ref(false);
const isBtnDisabled = computed(() => error.value.length > 0 || success.value);

if (res?.status !== 200) {
  createError({
    statusCode: res?.status,
    message: res?.body,
  });
}

const userData = JSON.parse(res?.body ?? {});
const newData = reactive({
  full_name: userData?.full_name,
  handle: userData?.handle,
  skills: userData?.skills,
  interests: userData?.interests,
  bio: userData?.bio,
  introduction: userData?.introduction,
  location: userData?.location,
});
const newDataCopy = JSON.parse(JSON.stringify(newData));

function submit(e) {
  e.preventDefault();

  if (JSON.stringify(newData) === JSON.stringify(newDataCopy))
    return (success.value = true);

  const skillsFiltered = newData.skills.filter((skill) => skill !== "");
  const interestsFiltered = newData.interests.filter(
    (interest) => interest !== "",
  );

  if (newData.handle.length > 32)
    return (error.value = i18n.t("user.update.handle.maxLength"));
  if (newData.full_name.length > 64)
    return (error.value = i18n.t("user.update.fullName.maxLength"));
  if (skillsFiltered.length > 5)
    return (error.value = i18n.t("user.update.skills.maxLength"));
  if (interestsFiltered.length > 5)
    return (error.value = i18n.t("user.update.interests.maxLength"));
  if (newData.bio.length > 256)
    return (error.value = i18n.t("user.update.bio.maxLength"));
  if (newData.introduction.length > 2048)
    return (error.value = i18n.t("user.update.introduction.maxLength"));

  if (!newData.handle)
    return (error.value = i18n.t("user.update.handle.required"));
  if (!newData.full_name)
    return (error.value = i18n.t("user.update.fullName.required"));

  if (!newData.handle?.match(/^[a-zA-Z0-9_]+$/))
    return (error.value = i18n.t("user.update.handle.pattern"));

  if (newData.handle.length < 3)
    return (error.value = i18n.t("user.update.handle.minLength"));

  $fetch("/api/user", {
    body: {
      id: user.value?.id,
      email: user.value?.email,
      full_name: newData.full_name,
      handle: newData.handle,
      skills: newData.skills,
      interests: newData.interests,
      bio: newData.bio,
      introduction: newData.introduction,
      location: newData.location,
    },
    method: "PATCH",
  }).then((res) => {
    if (res.status === 200) {
      success.value = true;
    } else {
      if (res.errMsg?.length) return (error.value = i18n.t(res.errMsg));
      error.value = res.body.toString();
    }
  });
}

function closeErrorDialog() {
  error.value = "";
  isBtnDisabled.value = false;
}
</script>

<template>
  <Modal
    :show="error?.length > 0"
    :title="$t('modal.title.error')"
    :description="error"
    end="ok"
    :handle-on-close="closeErrorDialog"
  />
  <Modal
    :show="success"
    :title="$t('modal.title.success')"
    :description="$t('user.update.success')"
    end="ok"
    :handle-on-close="() => navigateTo('/profile')"
  />
  <form @submit.prevent="submit">
    <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
      <div class="page-container">
        <div class="profile-container">
          <img
            :src="userData?.avatarURL"
            alt="avatar"
            class="icon"
            @click="
              navigateTo('https://gravatar.com/profile/avatars', {
                external: true,
                open: { target: '_blank' },
              })
            "
          />
          <div class="input-container">
            <span class="label-text">{{ $t("user.profile.fullName") }}</span>
            <input
              class="full_name input input-bordered"
              name="full_name"
              v-model="newData.full_name"
              placeholder="John Smith"
              maxlength="64"
            />
            <span class="label-text-alt"
              >{{ 64 - newData.full_name?.length }}
              {{ $t("user.edit.charLeft") }}</span
            >
          </div>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div class="input-container">
              <span class="label-text">{{ $t("user.profile.handle") }}</span>
              <input
                class="handle input input-bordered input-sm"
                name="handle"
                v-model="newData.handle"
                placeholder="j.smith1991"
                maxlength="32"
              />
              <span class="label-text-alt"
                >{{ 32 - newData.handle?.length }}
                {{ $t("user.edit.charLeft") }}</span
              >
            </div>
            <div class="input-container">
              <span class="label-text">{{ $t("user.profile.location") }}</span>
              <select
                class="input input-bordered input-sm"
                name="location"
                v-model="newData.location"
              >
                <option v-for="loc in location" :value="loc">{{ loc }}</option>
              </select>
            </div>
          </div>
          <div class="flex gap-2">
            <button
              class="btn btn-success"
              v-bind:disabled="isBtnDisabled"
              @click="isBtnDisabled = true"
            >
              {{ $t("user.edit.save") }}
            </button>
            <span class="btn btn-error" @click="navigateTo('/profile')">{{
              $t("user.edit.cancel")
            }}</span>
          </div>
        </div>
        <div class="side-info-container">
          <div class="items-container">
            <h1>{{ $t("user.profile.skills.title") }}</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input
                  class="input input-bordered w-full"
                  name="skill"
                  :value="newData.skills"
                  @input="
                    (e) => {
                      newData.skills = e.target.value.split(',') || [];
                    }
                  "
                  placeholder="Web Development, Graphic Design, Audio Engineer..."
                  :maxlength="
                    newData.skills.length <= 5 ? 9999 : newData.skills.length
                  "
                />
                <span class="label-text-alt"
                  >{{ 5 - newData.skills.length }}
                  {{ $t("user.edit.tagsLeft") }}</span
                >
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>{{ $t("user.profile.interests.title") }}</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input
                  class="input input-bordered w-full"
                  name="interest"
                  :value="newData.interests"
                  @input="
                    (e) => {
                      newData.interests = e.target.value.split(',') || [];
                    }
                  "
                  placeholder="Gaming, Content Creation, Music Producing..."
                />
                <span class="label-text-alt"
                  >{{ 5 - newData.interests.length }}
                  {{ $t("user.edit.tagsLeft") }}</span
                >
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>{{ $t("user.profile.bio.title") }}</h1>
            <input
              class="input input-bordered w-full"
              name="bio"
              placeholder="My mission is..."
              maxlength="256"
              v-model="newData.bio"
            />
            <span class="label-text-alt"
              >{{ 256 - newData.bio?.length }}
              {{ $t("user.edit.charLeft") }}</span
            >
          </div>
        </div>
      </div>
      <div class="divider">
        <h1>{{ $t("user.profile.introduction.title") }}</h1>
      </div>
      <div class="introduction">
        <textarea
          class="input input-bordered h-[50vh] w-full"
          name="introduction"
          v-model="newData.introduction"
          placeholder="My goal is..."
          maxlength="2048"
        >
        </textarea>
        <span class="label-text-alt"
          >{{ 2048 - newData.introduction?.length }}
          {{ $t("user.edit.charLeft") }}</span
        >
      </div>
      <div class="divider">
        <h1>{{ $t("user.profile.connections") }}</h1>
        <!-- Let's just hope we have another backend developer -->
      </div>
    </div>
  </form>
</template>

<style scoped>
h1,
.profile-container input {
  @apply text-2xl font-bold;
}

input {
  @apply text-center;
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

.introduction p {
  @apply text-sm;
}

.input-container {
  @apply flex flex-col gap-0;
}
</style>
