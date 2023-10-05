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
        <ul class="menu p-4 w-64 min-h-full backdrop-blur-xl bg-gradient-to-b from-blue-400/60 to-red-500/20 border-r border-white/25 text-white text-drop-shadow font-bold">
          <li><NuxtLink to="/"><img src="/icons/home.png" alt="Home" class="w-6">Home</NuxtLink></li>
          <li><NuxtLink to="/notifications"><img src="/icons/bell.png" alt="Notifications" class="w-6">Notifications</NuxtLink></li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/suggestions"><img src="/icons/discuss.png" alt="Suggestions" class="w-6">Suggestions</NuxtLink>
            <NuxtLink to="/suggestions/model" class="ml-8">Model</NuxtLink>
          </li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/learning"><img src="/icons/book.png" alt="Learning" class="w-6">Learning</NuxtLink>
            <NuxtLink to="/learning/student" class="ml-8">Student</NuxtLink>
            <NuxtLink to="/learning/teacher" class="ml-8">Teacher</NuxtLink>
            <NuxtLink to="/learning/quest-user" class="ml-8">Quest User</NuxtLink>
            <NuxtLink to="/learning/header-group" class="ml-8">Header Group</NuxtLink>
            <NuxtLink to="/learning/group-member" class="ml-8">Group Member</NuxtLink>
          </li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/my-plans"><img src="/icons/target.png" alt="My Plans" class="w-6">My Plans</NuxtLink>
          </li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/consult"><img src="/icons/discuss.png" alt="Consult" class="w-6">Consult</NuxtLink>
            <NuxtLink to="/consult/marketing" class="ml-8">Marketing</NuxtLink>
            <NuxtLink to="/consult/technical" class="ml-8">Technical</NuxtLink>
          </li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/community"><img src="/icons/community.png" alt="Community" class="w-6">Community</NuxtLink>
            <NuxtLink to="/community/direct-messages" class="ml-8">Direct Messages</NuxtLink>
            <NuxtLink to="/community/group-messages" class="ml-8">Group Messages</NuxtLink>
          </li>
          <div class="divider"></div>
          <li>
            <NuxtLink to="/accomplishment"><img src="/icons/grow.png" alt="Accomplishment" class="w-6">Accomplishment</NuxtLink>
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
  @apply invert
}

a {
  @apply hover:bg-black/80 p-2 hover:text-white;
}

.text-drop-shadow {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>