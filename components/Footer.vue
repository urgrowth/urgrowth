<script setup>
import { onMounted } from "vue";

const { locale } = useI18n();
const lang = {
  th: "English",
  en: "ภาษาไทย",
};

onMounted(() => {
  locale.value = window.localStorage.getItem("locale") || "en";
});

function changeLanguage(e) {
  locale.value = locale.value === "en" ? "th" : "en";
  window.localStorage.setItem("locale", locale.value);
}
</script>

<template>
  <div
    class="mt-8 flex w-full items-center justify-between bg-gradient-to-b from-white to-neutral-200 px-[12px] py-8"
  >
    <button @click="changeLanguage" class="btn btn-primary">
      {{ lang[locale] }}
    </button>
    <p class="text-right text-gray-400">
      Made with ☮️️ and 💖<br />
      by URGROWTH Team,
      <a href="https://github.com/urgrowth/web" class="underline">
        View source
      </a>
    </p>
  </div>
</template>
