<script setup>
import { onMounted } from "vue";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

onMounted(async () => {
  if (user?.value) {
    return navigateTo("/profile");
  }

  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    }
  })
})
</script>

<template>

</template>