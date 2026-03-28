<script setup lang="ts">
import type { ProfileData } from '../config';

const props = defineProps<{
  profile: ProfileData;
  isIframe?: boolean;
}>();

const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

const sendEmail = () => {
  window.location.href = `mailto:${props.profile.email}`;
};
</script>

<template>
  <div 
    class="w-[440px] max-w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col mx-auto transition-all duration-300 border"
    :class="[isIframe ? 'bg-[#232428]/60 backdrop-blur-2xl border-white/10' : 'bg-[#232428] border-[#1e1f22]']"
  >
    
    <div class="w-full aspect-[24/9] md:aspect-[23/9] relative bg-gray-800 shrink-0 overflow-hidden">
      <video v-if="isVideo(profile.banner)" 
             :src="profile.banner" 
             class="absolute inset-0 w-full h-full object-cover" 
             autoplay loop muted playsinline>
      </video>
      <img v-else 
           :src="profile.banner" 
           class="absolute inset-0 w-full h-full object-cover" 
           alt="Profile Banner">
    </div>

    <div class="px-4 pb-4 md:px-5 md:pb-5 w-full max-w-full">
      
      <div class="relative -mt-[60px] md:-mt-[66px] mb-3 w-fit">
        <div class="rounded-full border-[5px] md:border-[6px] border-[#232428] bg-[#232428]">
          <video v-if="isVideo(profile.avatar)" 
                 :src="profile.avatar" 
                 class="w-[100px] h-[100px] md:w-[112px] md:h-[112px] rounded-full object-cover" 
                 autoplay loop muted playsinline>
          </video>
          <img v-else 
               :src="profile.avatar" 
               class="w-[100px] h-[100px] md:w-[112px] md:h-[112px] rounded-full object-cover" 
               alt="User Avatar">
        </div>
      </div>

      <div class="flex flex-col gap-4">
        
        <div class="flex justify-between items-center w-full mt-1 gap-10">
          <h1 class="text-xl md:text-2xl font-bold text-white break-words truncate">{{ profile.displayName }}</h1>
          
          <div class="flex gap-1.5 md:gap-2 shrink-0">
             <button @click="sendEmail" class="bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold py-1.5 px-2.5 md:px-3 rounded transition-colors text-[11px] md:text-xs flex items-center gap-1.5 md:gap-2">
               <i class="fa-solid fa-comment text-[14px]"></i>
               <span class="hidden sm:block">Message</span> </button>
             
             <a href="https://github.com/vermilion10/dc-profile" target="_blank" class="bg-[#313338] hover:bg-[#2b2d31] text-white flex-shrink-0 font-semibold py-1.5 px-2.5 md:px-3 rounded transition-colors text-xs border border-[#1e1f22] flex items-center justify-center">
               <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
             </a>
          </div>
        </div>

        <div class="flex flex-col gap-5 mt-1">
          
          <div>
            <h3 class="text-[11px] font-bold uppercase text-gray-400 mb-1.5">About Me</h3>
            <div class="text-[13px] md:text-sm break-words whitespace-pre-wrap text-gray-200 leading-snug">
              {{ profile.aboutMe }}
            </div>
          </div>

          <div v-if="profile.connections?.length">
            <h3 class="text-[11px] font-bold uppercase text-gray-400 mb-2.5">Connections</h3>
            <div class="flex flex-col gap-2.5">
              
              <a v-for="conn in profile.connections" :key="conn.name" :href="conn.url" target="_blank" rel="noopener noreferrer" 
                 class="flex items-start gap-2.5 md:gap-3 rounded transition-colors group">
                 
                 <div class="w-6 h-6 md:w-7 md:h-7 rounded shrink-0 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors text-lg md:text-xl">
                   <i :class="conn.type !== 'steam' ? `fa-brands fa-${conn.type}` : 'fa-brands fa-steam'"></i>
                 </div>
                 
                 <div class="flex flex-col justify-center min-h-[24px] md:min-h-[28px] w-full">
                   <div class="flex items-center gap-1 group-hover:underline">
                      <span class="text-gray-200 text-[13px] md:text-sm font-medium">{{ conn.name }}</span>
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                   </div>
                   <span v-if="conn.subtext" class="text-gray-400 text-[11px] md:text-xs mt-0.5 whitespace-pre-wrap leading-tight">{{ conn.subtext }}</span>
                 </div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>