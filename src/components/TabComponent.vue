<script setup>
import {ref} from 'vue'
import FilterModal from './modals/FilterModal.vue'
const props = defineProps({
  tabs:Array
})

const selectedTab = ref('')
const filteredModal = ref(false)
</script>

<template>
    <div  class="flex   h-[98px] pt-5 items-center justify-between w-full">
       <div class="flex items-center w-full mt-4 overflow-y-auto  gap-10">
          <div @click="selectedTab = tab.id" v-for="tab in tabs" :key="tab.id" class="cursor-pointer opacity-50 hover:border-b-2 overflow-y-auto  flex-none hover:opacity-100 pb-3" :class="selectedTab === tab.id ? '!opacity-100 border-black border-b-2': ''">
                 <div class=" flex items-center justify-center mb-2">
                    <img class="h-6 w-6" :src="tab.image" alt="">
                </div>
                <div class="flex items-center justify-center text-xs whitespace-nowrap">
                {{tab.title}}
                </div> 
          </div>
            <!-- <router-link v-for="tab in tabs" :key="tab.id" :to="tab.to" active-class="!opacity-100 border-black border-b-2" class="opacity-50 border-b-2 pb-3 border-white hover:border-b-2 hover:border-gray-300 overflow-x-auto overflow-scroll hover:opacity-100">
                 <div class=" flex items-center justify-center mb-2">
                    <img class="h-6 w-6" :src="tab.image" alt="">
                </div>
                <div class="flex items-center justify-center text-xs whitespace-nowrap">
                {{tab.title}}
                </div> 
            </router-link> -->
       </div>
        <div class="flex items-center max-[768px]:hidden rounded-xl ">  
            <div @click="filteredModal = true" class="flex shadow-2xl shadow-white cursor-pointer items-center justify-center border border-gray-200 h-12 text-xs px-3 rounded-xl gap-2">
                <div>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                </div>
                <div>
                    Filtreler
                </div>
            </div>
        
        </div>
        <FilterModal v-show="filteredModal" @close-modal="filteredModal = false"/>
  
    </div>
    

</template>