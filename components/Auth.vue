<script setup>
const supabase = useSupabaseClient();

const googleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    alert("Something went wrong, please try again.");
  }
};
</script>

<template>
  <div>
    <button @click="googleLogin" class="btn btn-primary">Login with Google</button>
  </div>
</template>

<style scoped>

</style>