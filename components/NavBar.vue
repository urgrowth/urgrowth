<template>
  <nav>
    <div class="navbar-start">
      <img class="icon" src="/icons/hamburger.png" alt="Menu" />
    </div>
    <div class="logo-container navbar-center">
      <img src="/images/logo-black.svg" alt="Logo" />
      <h1 id="company-title">URGROWTH</h1>
    </div>
    <div class="navbar-end">
      <img class="icon" src="/icons/user.png" alt="Account" />
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
  @apply rounded-full;
  width: 64px;
  height: 64px;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
}

.logo-container h1 {
  @apply text-xl font-bold md:text-2xl;
}
</style>
