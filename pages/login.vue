<script setup>
import { onMounted } from "vue";

const user = useSupabaseUser();
const supabase = useSupabaseClient();

onMounted(async () => {
  if (user.value?.user_metadata) {
    return navigateTo("/profile");
  }

  await supabase.auth.signInWithOAuth({
    provider: "google",
  })
})
</script>

<template>

</template>