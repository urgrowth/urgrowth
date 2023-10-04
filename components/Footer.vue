<script setup>
import { onMounted } from "vue";

const { locale } = useI18n();
const lang = {
  th: "English",
  en: "ภาษาไทย",
}

onMounted(() => {
  locale.value = window.localStorage.getItem("locale") || "en";
})

function changeLanguage(e) {
  locale.value = locale.value === "en" ? "th" : "en";
  window.localStorage.setItem("locale", locale.value);


}
</script>

<template>
  <div
    class="flex w-full items-center justify-between py-8 mt-8 px-[12px] bg-neutral-200"
  >
    <button @click="changeLanguage" class="btn btn-primary">{{ lang[locale] }}</button>
    <p class="text-right text-gray-400">
      Made with ☮️️ and 💖<br />
      by URGROWTH Team,
      <a
        href="https://github.com/urgrowth/web"
        class="underline"
      >
        View source
      </a>
    </p>
  </div>
</template>