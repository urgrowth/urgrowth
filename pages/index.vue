<template>
  <div class="page-container">
    <!-- Banner -->
    <div class="banner-container">
      <div class="title-container">
        <div class="text-wrapper">
          <h1>
            {{ $t("home.banner.title") }}
          </h1>
          <h1>
            <span class="highlight">{{ $t("home.banner.subtitle") }}</span>
            <span class="sub">LET'S URGROWTH WEIGH UP YOUR IDEAS</span>
          </h1>
        </div>
        <button class="btn btn-warning w-80">
          {{ $t("home.banner.button") }}
        </button>
      </div>
      <img
        class="banner1"
        src="/images/banner1.svg"
        alt="Thinking"
        width="512"
      />
    </div>

    <!-- Features -->
    <div class="features-container">
      <div class="feature">
        <img class="icon" src="/icons/info.png" alt="icon" />
        <p>{{ $t("home.features[0]") }}</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/book.png" alt="icon" />
        <p>{{ $t("home.features[1]") }}</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/target.png" alt="icon" />
        <p>{{ $t("home.features[2]") }}</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/discuss.png" alt="icon" />
        <p>{{ $t("home.features[3]") }}</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/community.png" alt="icon" />
        <p>{{ $t("home.features[4]") }}</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/grow.png" alt="icon" />
        <p>{{ $t("home.features[5]") }}</p>
      </div>
    </div>

    <!-- Why us? -->
    <div class="pro-container">
      <div class="text-wrapper">
        <h1>{{ $t("home.pro.title") }}</h1>
        <p>{{ $t("home.pro.subtitle") }}</p>
      </div>
      <div class="list-wrapper">
        <div class="item-container">
          <img src="/icons/people.png" alt="icon" />
          <div class="flex flex-col gap-2">
            <h1>{{ $t("home.pro.pros[0].title") }}</h1>
            <p>{{ $t("home.pro.pros[0].subtitle") }}</p>
          </div>
        </div>
        <div class="item-container">
          <img src="/icons/mentoring.png" alt="icon" />
          <div class="flex flex-col gap-2">
            <h1>{{ $t("home.pro.pros[1].title") }}</h1>
            <p>{{ $t("home.pro.pros[1].subtitle") }}</p>
          </div>
        </div>
        <div class="item-container">
          <img src="/icons/service.png" alt="icon" />
          <div class="flex flex-col gap-2">
            <h1>{{ $t("home.pro.pros[2].title") }}</h1>
            <p>{{ $t("home.pro.pros[2].subtitle") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  @apply relative flex h-[500px] items-center overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-800 p-2 md:p-12;
}

.banner-container button {
  @apply text-lg;
}

.banner1 {
  @apply absolute bottom-0 right-0 mix-blend-multiply;
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

.features-container {
  @apply grid w-full grid-cols-2 justify-center gap-12 md:flex md:flex-row;
}

.features-container .feature {
  @apply flex flex-col items-center gap-2;
}

.features-container .feature .icon {
  @apply h-16 w-16;
}

.features-container .feature p {
  @apply text-2xl;
}

.pro-container {
  @apply flex w-full flex-col items-center justify-center gap-12 text-center;
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

.pro-container .list-wrapper {
  @apply grid w-full grid-cols-1 place-content-evenly gap-12 md:grid-cols-3 md:gap-0;
}

.pro-container .list-wrapper .item-container {
  @apply flex flex-col items-center gap-4;
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
