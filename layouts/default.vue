<template>
  <LazyNuxtLoadingIndicator color="#f28c18" class="p-1" />
  <div class="page-layouts">
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <NavBar />
        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul
          class="menu gap-y-4 min-h-full w-64 border-r border-white/25 bg-gradient-to-b from-blue-400/60 to-red-500/20 p-4 font-bold text-white backdrop-blur-xl"
        >
          <div class="flex w-full justify-between items-center">
            <div class="flex items-center gap-2">
              <img src="/images/logo-white.svg" alt="Logo" class="w-8 ml-1 p-0" />
              <h1 class="text-base">URGROWTH</h1>
            </div>
              <label for="my-drawer">
                <img class="icon invert hover:invert-0" src="/icons/hamburger.png" alt="Menu" />
              </label>
          </div>
          <li>
            <NuxtLink to="/">
              <img src="/icons/home.png" alt="Home" class="w-4"/>
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notifications">
              <img src="/icons/bell.png" alt="Notifications" class="w-4"/>
              Notifications
              </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/suggestions" @mouseenter="toggleAccordion('suggestions')">
              <img src="/icons/info.png" alt="Suggestions" class="w-4" />
              Suggestions
              <img src="/images/caret.png" alt="caret" class="w-2 caret" :class="{ 'open': activeAccordion === 'suggestions'}" />
            </NuxtLink>
              <NuxtLink v-if="activeAccordion === 'suggestions'" to="/suggestions/model" class="ml-8 mt-2">Model</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/learning" @mouseenter="toggleAccordion('learnings')">
              <img src="/icons/book.png" alt="Learning" class="w-4" />
              Learnings
              <img src="/images/caret.png" alt="caret" class="w-2 caret" :class="{ 'open': activeAccordion === 'learnings'}" />
            </NuxtLink>
            <NuxtLink v-if="activeAccordion === 'learnings'" to="/learning/student" class="ml-8 mt-2">Student</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'learnings'" to="/learning/teacher" class="ml-8">Teacher</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'learnings'" to="/learning/quest-user" class="ml-8">Quest User</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'learnings'" to="/learning/header-group" class="ml-8">Header Group</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'learnings'" to="/learning/group-member" class="ml-8">Group Member</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/my-plans"
              ><img src="/icons/target.png" alt="My Plans" class="w-4" />My
              Plans</NuxtLink
            >
          </li>

          <li>
            <NuxtLink to="/consult" @mouseenter="toggleAccordion('consult')">
              <img src="/icons/discuss.png" alt="Consult" class="w-4" />
              Consult
              <img src="/images/caret.png" alt="Suggestions" class="w-2 caret" :class="{ 'open': activeAccordion === 'consult'}" />
            </NuxtLink>
            <NuxtLink v-if="activeAccordion === 'consult'" to="/consult/marketing" class="ml-8 mt-2">Marketing</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'consult'" to="/consult/technical" class="ml-8">Technical</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/community" @mouseenter="toggleAccordion('community')">
              <img src="/icons/community.png" alt="Community" class="w-4" />
              Community
              <img src="/images/caret.png" alt="Suggestions" class="w-2 caret" :class="{ 'open': activeAccordion === 'community'}" />
            </NuxtLink>
            <NuxtLink v-if="activeAccordion === 'community'" to="/community/direct-messages" class="ml-8">Direct Messages</NuxtLink>
            <NuxtLink v-if="activeAccordion === 'community'" to="/community/group-messages" class="ml-8">Group Messages</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/accomplishment">
              <img src="/icons/grow.png" alt="Accomplishment" class="w-4"/>Accomplishment
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.drawer-side {
  z-index: 2;
}

a img {
  @apply invert hover:invert-0;
}

a {
  @apply p-2 hover:bg-black/80 rounded-lg hover:text-white;
  position: relative;
}

.caret {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  transition: transform 0.2s;
}

.open {
  transform: translateY(-50%) rotate(0deg);
}

.icon {
  @apply w-4 h-auto;
}
</style>

<script>
export default {
  data() {
    return {
      activeAccordion: null, // Initialize activeAccordion as null
    };
  },
  methods: {
    toggleAccordion(section) { //#11101D
      if (this.activeAccordion === section) {
        this.activeAccordion = null; // Close the accordion if it's already open
      } else {
        this.activeAccordion = section; // Open the accordion
      }
    },
  },
};
//        <ulclass="menu gap-y-4 min-h-full w-64 border-r border-white/25 bg-black p-4 font-bold text-white">
//darkmode
//<div class="divider"></div>

</script>




