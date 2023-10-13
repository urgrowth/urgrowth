<script setup>
import { onMounted } from "vue";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

onMounted(async () => {
  if (user?.value) {
    navigateTo("/profile");
  } else {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  }
});
</script>

<template></template>
