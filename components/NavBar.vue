<template>
  <nav>
    <div class="navbar-start">
      <img class="icon" src="/icons/hamburger.png" alt="Menu">
    </div>
    <div class="navbar-center logo-container">
      <img src="/images/logo-black.svg" alt="Logo">
      <h1>URGROWTH</h1>
    </div>
    <div class="navbar-end">
      <img class="icon" src="/icons/user.png" alt="Account">
    </div>
  </nav>
</template>

<style scoped>
   nav {
     @apply navbar bg-blend-normal;
   }

   .logo-container {
     @apply flex justify-center navbar-center;
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
     @apply md:text-2xl text-xl font-bold
   }
</style>