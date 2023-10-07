<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const res = await $fetch("/api/getUser", {
  body: {
    id: user.value?.id,
  },
  method: "POST",
});

const userData = JSON.parse(res?.body ?? {});
const newData = reactive({
  full_name: userData?.full_name,
  handle: userData?.handle,
  skills: userData?.skills,
  interests: userData?.interests,
  bio: userData?.bio,
  introduction: userData?.introduction,
});

if (res?.status !== 200) {
  alert("Something went wrong");
  navigateTo("/");
}

function logout() {
  supabase.auth.signOut();
  return navigateTo("/");
}

function submit(e) {
  e.preventDefault();

  $fetch("/api/updateUser", {
    body: {
      id: user.value?.id,
      full_name: newData.full_name,
      handle: newData.handle,
      skills: newData.skills,
      interests: newData.interests,
      bio: newData.bio,
      introduction: newData.introduction,
    },
    method: "POST",
  }).then((res) => {
    if (res.status === 200) {
      alert("Profile updated!");
      return navigateTo("/profile");
    }

    createError({
      statusCode: res.status,
      message: res.body,
    });
  });
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="flex flex-col gap-4 md:px-12 md:py-6 px-4 py-2">
      <div class="page-container">
        <div class="profile-container">
          <img :src="userData?.avatarURL" alt="avatar" class="icon"
               @click="navigateTo('https://www.gravatar.com/', { external: true })">
          <div class="input-container">
            <span class="label-text">Full name</span>
            <input class="full_name input input-bordered" name="full_name" v-model="newData.full_name"
                   placeholder="John Smith" maxlength="64">
            <span class="label-text-alt">{{ newData.full_name?.length }} / 64 characters left</span>
          </div>
          <div class="input-container">
            <span class="label-text">Handle (username)</span>
            <input class="handle input input-sm input-bordered" name="handle" v-model="newData.handle"
                   placeholder="j.smith1991" maxlength="32">
            <span class="label-text-alt">{{ newData.handle?.length }} / 32 characters left</span>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-success">SAVE</button>
            <button class="btn btn-error" @click="logout">SIGN OUT</button>
          </div>
        </div>
        <div class="side-info-container">
          <div class="items-container">
            <h1>Skills</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input class="input input-bordered w-full" name="skill" :value="newData.skills"
                       @input="(e) => { newData.skills = (e.target.value.split(',') || []) }"
                       placeholder="Web Development, Graphic Design, Audio Engineer..."
                       :maxlength="newData.skills.length <= 5 ? 9999 : newData.skills.length">
                <span class="label-text-alt">{{ newData.skills.length }} / 5 tags</span>
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>Interests</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input class="input input-bordered w-full" name="interest" :value="newData.interests"
                       @input="(e) => { newData.interests = (e.target.value.split(',') || []) }"
                       placeholder="Gaming, Content Creation, Music Producing...">
                <span class="label-text-alt">{{ newData.interests.length }} / 5 tags</span>
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>Mission</h1>
            <input class="input input-bordered w-full" name="bio" placeholder="My mission is..." maxlength="256" v-model="newData.bio">
            <span class="label-text-alt">{{ newData.bio?.length }} / 256 characters left</span>
          </div>
        </div>
      </div>
      <div class="divider"><h1>INTRODUCTION</h1></div>
      <div class="introduction">
        <textarea class="input input-bordered w-full h-full" name="introduction" v-model="newData.introduction"
                  placeholder="My goal is...">
        </textarea>
        <span class="label-text-alt">{{ newData.introduction?.length }} / 2048 characters left</span>
      </div>
      <div class="divider">
        <h1>CONNECTIONS</h1>
        <!-- Let's just hope we have another backend developer -->
      </div>
    </div>
  </form>
</template>

<style scoped>
h1, .profile-container input {
  @apply text-2xl font-bold;
}

input {
  @apply text-center
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

.introduction p {
  @apply text-sm;
}

.input-container {
  @apply flex flex-col gap-0;
}
</style>