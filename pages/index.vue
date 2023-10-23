<template>
  <div class="page-container">
    <div class="banner-container">
      <div class="title-container">
        <div class="text-wrapper">
          <h1 class="text-3xl font-bold text-white">
            {{ $t("home.banner.title") }}
          </h1>
          <h1>
            <span class="text-4xl text-yellow-400 highlight">
              {{ $t("home.banner.subtitle") }}
            </span>
            <span class="ml-2 text-xl text-neutral-300 sub">
              LET'S URGROWTH WEIGH UP YOUR IDEAS
            </span>
          </h1>
        </div>
        <button
          class="btn btn-warning w-80 text-lg"
          @click="navigateTo('/login')"
        >
          {{ $t("home.banner.button") }}
        </button>
      </div>
      <img
        class="banner1 absolute bottom-0 right-0 mix-blend-multiply"
        src="/images/banner1.svg"
        alt="Thinking"
        width="512"
      />
    </div>

    <!-- Features -->
    <div class="features-container grid grid-cols-2 justify-center gap-12 md:flex md:flex-row">
      <div class="feature flex flex-col items-center gap-2">
        <img class="icon h-16 w-16" src="/icons/info.png" alt="icon" />
        <p class="text-2xl">{{ $t("home.features[0]") }}</p>
      </div>
      <!-- Repeat for other feature sections -->
    </div>

    <!-- Why us? -->
    <div class="pro-container flex w-full flex-col items-center justify-center gap-12 text-center">
      <div class="text-wrapper flex flex-col gap-2">
        <h1 class="text-base md:text-2xl">{{ $t("home.pro.title") }}</h1>
        <p class="text-2xl font-bold text-blue-500 md:text-4xl">
          {{ $t("home.pro.subtitle") }}
        </p>
      </div>
      <div class="list-wrapper grid w-full grid-cols-1 place-content-evenly gap-12 md:grid-cols-3 md:gap-0">
        <div class="item-container flex flex-col items-center gap-4">
          <img class="h-28 w-28" src="/icons/people.png" alt="icon" />
          <h1 class="text-xl font-bold">{{ $t("home.pro.pros[0].title") }}</h1>
          <p class="w-64 break-words text-base">
            {{ $t("home.pro.pros[0].subtitle") }}
          </p>
        </div>
        <!-- Repeat for other item sections -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  @apply relative flex h-[500px] items-center overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-800 p-2 md:p-12;
}

.title-container {
  @apply flex flex-col gap-6;
  z-index: 1;
}

.title-container .text-wrapper {
  @apply flex flex-col gap-4;
}

.title-container .text-wrapper h1 {
  @apply text-3xl font-bold text-white;
}

.title-container .text-wrapper h1 span.highlight {
  @apply text-4xl text-yellow-400;
}

.title-container .text-wrapper h1 span.sub {
  @apply ml-2 text-xl text-neutral-300;
}

.features-container .feature .icon {
  @apply h-16 w-16;
}

.features-container .feature p {
  @apply text-2xl;
}

.pro-container .text-wrapper {
  @apply flex flex-col gap-2;
}

.pro-container .text-wrapper h1 {
  @apply text-base md:text-2xl;
}

.pro-container .text-wrapper p {
  @apply text-2xl font-bold text-blue-500 md:text-4xl;
}

.pro-container .list-wrapper .item-container img {
  @apply h-28 w-28;
}

.pro-container .list-wrapper .item-container h1 {
  @apply text-xl font-bold;
}

.pro-container .list-wrapper .item-container p {
  @apply w-64 break-words text-base;
}
</style>
