<script setup>
useHead({
  title: "URGROWTH - Your Companion to Success",
  htmlAttrs: {
    lang: "en",
  },

  meta: [
    {
      property: "og:description",
      content: "We are dedicated to encouraging the youths through our website to set out on a journey of self-discovery and self-empowerment.",
      name: "description",
    },
    { property: "og:site_name", content: "URGROWTH - Your Companion to Success" },
    { property: "og:url", content: "https://beta.tinarskii.com" },
    { property: "og:type", content: "website" },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:site",
      content: "@WeURGROWTH",
    },
    {
      property: "twitter:description",
      content: "We are dedicated to encouraging the youths through our website to set out on a journey of self-discovery and self-empowerment.",
    },
    {
      name: "keywords",
      content: "urgrowth,weurgrowth,growth",
    },
  ],
});
</script>

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
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul
          class="menu min-h-full w-64 gap-y-4 border-r border-white/25 p-4 font-bold text-white glass"
        >
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-2">
              <img
                src="/images/beta.png"
                alt="Logo"
              />
            </div>
            <label for="my-drawer">
              <img
                class="icon"
                src="/icons/hamburger.svg"
                alt="Menu"
              />
            </label>
          </div>
          <li>
            <NuxtLink to="/">
              <img src="/icons/home.png" alt="Home" class="w-4" />
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notifications">
              <img src="/icons/bell.png" alt="Notifications" class="w-4" />
              Notifications
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/learning" @mouseenter="toggleAccordion('learnings')">
              <img src="/icons/book.png" alt="Learning" class="w-4" />
              Learnings
              <img
                src="/images/caret.png"
                alt="caret"
                class="caret w-2"
                :class="{ open: activeAccordion === 'learnings' }"
              />
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
  @apply rounded-lg p-2 hover:bg-black/80 hover:text-white;
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
  @apply h-auto w-4;
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
    toggleAccordion(section) {
      //#11101D
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
