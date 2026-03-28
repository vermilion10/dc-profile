<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProfileCard from './components/ProfileCard.vue';
import { profileConfig } from './config';

const useGlassmorphism = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const disableGlass = urlParams.get('glass') === 'false';

  if (window.self !== window.top && !disableGlass) {
    useGlassmorphism.value = true;
  }
});
</script>

<template>
  <div 
    class="min-h-screen w-full flex items-center justify-center p-4 transition-all duration-300 relative"
    :class="[useGlassmorphism ? 'bg-transparent' : 'bg-discord-bg']"
  >
    <ProfileCard :profile="profileConfig" :is-iframe="useGlassmorphism" />
  </div>
</template>