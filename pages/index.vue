<script lang="ts">

</script>

<template>
  <div class="page-container">
    <!-- Banner -->
    <div class="banner-container">
      <div class="title-container">
        <div class="text-wrapper">
          <h1>
            พวกเราจะเติบโตตามเป้าหมายด้วยกัน
          </h1>
          <h1>
            <span class="highlight">"ผ่านไอเดียของคุณ"</span>
            <span class="sub">LET'S URGROWTH WEIGH UP YOUR IDEAS</span>
          </h1>
        </div>
        <button class="btn btn-warning w-80">
          ไปใช้ไอเดียของคุณกัน!
        </button>
      </div>
      <img class="banner1" src="/images/banner1.svg" alt="Thinking" width="512">
    </div>

    <!-- Features -->
    <div class="features-container">
      <div class="feature">
        <img class="icon" src="/icons/info.png" alt="icon">
        <p>แนะนำ</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/book.png" alt="icon">
        <p>เรียนรู้</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/target.png" alt="icon">
        <p>วางแผน</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/discuss.png" alt="icon">
        <p>ปรึกษา</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/community.png" alt="icon">
        <p>ชุมชน</p>
      </div>
      <div class="feature">
        <img class="icon" src="/icons/grow.png" alt="icon">
        <p>เติบโต</p>
      </div>
    </div>

    <!-- Why us? -->
    <div class="pro-container">
      <div class="text-wrapper">
        <h1>ทำไมต้องใช้ URGROWTH?</h1>
        <p>"เพราะพวกเราจะเติบโตตามเป้าหมายด้วยกัน ผ่านไอเดียของคุณ"</p>
      </div>
      <div class="list-wrapper">
        <div class="item-container">
          <img src="/icons/people.png" alt="icon">
          <div class="flex flex-col gap-2">
            <h1>ชุมชนคุณภาพ</h1>
            <p>ชุมชนที่มีความคิดที่เหมือนคุณ และมีประสบการณ์ตรงในการทำงาน</p>
          </div>
        </div>
        <div class="item-container">
          <img src="/icons/mentoring.png" alt="icon">
          <div class="flex flex-col gap-2">
            <h1>ปรึกษาจากผู้เชี่ยวชาญ</h1>
            <p>ปรึกษาและวางแผน จากผู้เชี่ยวชาญมากประสบการณ์โดยตรง</p>
          </div>
        </div>
        <div class="item-container">
          <img src="/icons/service.png" alt="icon">
          <div class="flex flex-col gap-2">
            <h1>บริการที่หลากหลาย</h1>
            <p>มีบริการหลากหลายให้เลือกใช้ เพื่อพัฒนาศักยภาพของคุณ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  @apply md:p-12 p-2 bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-800 h-[500px] flex items-center overflow-hidden relative;
}

.banner-container button {
  @apply text-lg
}

.banner1 {
  @apply absolute right-0 bottom-0 mix-blend-multiply;
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
  @apply text-xl text-neutral-300 ml-2;
}

.features-container {
  @apply md:flex md:flex-row grid grid-cols-2 gap-12 w-full justify-center;
}

.features-container .feature {
  @apply flex flex-col gap-2 items-center;
}

.features-container .feature .icon {
  @apply w-16 h-16;
}

.features-container .feature p {
  @apply text-2xl;
}

.pro-container {
  @apply flex flex-col gap-12 justify-center items-center w-full text-center;
}

.pro-container .text-wrapper {
  @apply flex flex-col gap-2;
}

.pro-container .text-wrapper h1 {
  @apply text-base md:text-2xl;
}

.pro-container .text-wrapper p {
  @apply text-2xl md:text-4xl font-bold text-blue-500;
}

.pro-container .list-wrapper {
  @apply grid md:grid-cols-3 grid-cols-1 place-content-evenly w-full gap-12 md:gap-0;
}

.pro-container .list-wrapper .item-container {
  @apply flex flex-col gap-4 items-center;
}

.pro-container .list-wrapper .item-container img {
  @apply w-28 h-28;
}

.pro-container .list-wrapper .item-container h1 {
  @apply text-xl font-bold;
}

.pro-container .list-wrapper .item-container p {
  @apply text-base w-64 break-words;
}
</style>