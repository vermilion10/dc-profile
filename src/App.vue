<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProfileCard from './components/ProfileCard.vue';
import { profileConfig } from './config';

const isIframe = ref(false);

onMounted(() => {
  if (window.self !== window.top) {
    isIframe.value = true;
  }
});
</script>

<template>
  <div 
    class="min-h-screen w-full flex items-center justify-center p-4 transition-all duration-300 relative"
    :class="[isIframe ? 'bg-transparent' : 'bg-discord-bg']"
  >
    <div 
      v-if="isIframe" 
      class="absolute inset-0 backdrop-blur-xl bg-black/40 -z-10"
    />

    <ProfileCard :profile="profileConfig" />
  </div>
</template>