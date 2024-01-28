<script setup lang="ts">
import { md5 } from "~/lib/md5";
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);
const user = useSupabaseUser();

const avatar = `https://www.gravatar.com/avatar/${md5(
  user.value?.email ?? "",
)}?d=mp&s=48`;
</script>

<template>
  <nav class="mb-6">
    <div class="navbar-start">
      <label for="my-drawer">
        <img class="icon" src="/icons/hamburger.svg" alt="Menu" />
      </label>
    </div>
    <div
      class="logo-container navbar-center cursor-pointer"
      @click="navigateTo('/')"
    >
      <img src="/images/logo-beta.svg" alt="Logo" />
    </div>
    <div class="navbar-end">
      <NuxtLink to="/profile">
        <img class="rounded-2xl" :src="avatar" alt="Account" v-if="user" />
        <img class="icon" src="/icons/user.png" alt="Account" v-else />
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply navbar bg-blend-normal;
}

.logo-container {
  @apply navbar-center flex justify-center;
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
</style>
