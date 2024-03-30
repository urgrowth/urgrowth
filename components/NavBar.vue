<script setup lang="ts">
import { md5 } from "~/lib/md5";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
const user = useSupabaseUser();

const avatar = `https://www.gravatar.com/avatar/${md5(
  user.value?.email ?? "",
)}?d=mp&s=48`;
</script>

<template>
  <nav class="navbar-container">
    <div class="navbar-items">
      <div class="flex gap-4 items-center">
        <div
          class="logo-container navbar-center cursor-pointer"
          @click="navigateTo('/')"
        >
          <img src="/images/logo-beta.svg" alt="Logo" width="200px" />
        </div>
        <label for="my-drawer">
          <div class="hamburger">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
          </div>
        </label>
      </div>
      <div>
        <NuxtLink to="/profile">
          <img class="rounded-box" :src="avatar" alt="Account" v-if="user" />
          <img class="icon" src="/icons/user.png" alt="Account" v-else />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply navbar bg-blend-normal;
}

.navbar-container {
  @apply z-[2] bg-base-100;
}

.navbar-items {
  @apply flex flex-row justify-between w-full md:px-12 px-6 py-2;
}

.logo-container {
  @apply navbar-center justify-center hidden md:flex;
}

.logo-container img {
  height: 64px;

  @media screen and (max-width: 768px) {
    height: 48px;
  }
}

.logo-container h1 {
  @apply text-xl font-bold md:text-2xl;
}

.hamburger {
  @apply cursor-pointer flex flex-col justify-center items-center gap-1;
}

.line-1, .line-2, .line-3 {
  cursor: pointer;
  height: 3px;
  width: 24px;
  background: #000;
  position: relative;
  display: block;
  content: '';
  transition: all 0.3s;
}
</style>
