<script setup>
import CommentModal from '../components/modals/CommentModal.vue'
import { ref, computed } from 'vue'
const openComment = ref(false)
const props = defineProps({
    ratings: Object,
});

const getStarsAvarage = computed(() => {
    const totalStars = props.ratings.reduce((toplam, rating) => toplam + Number(rating.rate) , 0);
    return  parseFloat((totalStars / 100) * 5).toFixed(1);
})
</script>

<template>
    <div id="vote" class="">
        <div class="flex items-center gap-2 text-[22px]">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;">
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path>
            </svg>
            <div>
                {{ getStarsAvarage }}
            </div>
            ·
            <div>
                {{ ratings.length }} değerlendirme
            </div> 
            
        </div>
        <div class="grid grid-cols-2 w-full mt-7">
            <div v-for="rating in ratings.slice(0, 6)" :key="ratings"  class="flex items-center justify-between mr-20 h-10 w-full">
                <div class="w-full">{{ rating.raters }}</div>
                <div class="gap-1 flex items-center w-full pr-20" >
                    <div  class="w-full bg-white rounded-full h-1">
                        <div class="bg-black h-1 rounded-full" :style="{width: `${rating.rate * 100 / 5}%` }"></div>
                    </div>
                <div class="text-xs">{{ rating.rate }}</div> 
                </div>
            </div>   
        </div>
        <div class="grid grid-cols-2 w-full mt-7">
            <div v-for="rating in ratings.slice(0, 6)" :key="ratings" class="w-full">
                <div class="w-full pb-12 pr-24">
                    <div class="flex gap-3">
                            <img class="h-10 w-10 rounded-full" :src="rating.image" alt="">              
                        <div class="pb-4 ">
                            <div class="text-base">
                                {{ rating.raters }}
                            </div>
                            <div class="text-[14px]">
                                {{ rating.date }}
                            </div> 
                        </div> 
                    </div>
                    <div class="text-base font-light">
                    {{ rating.description }}
                    </div>

                </div>      
            </div>  
            <div @click="openComment = true" class="border border-black w-1/3  flex items-center pl-8 rounded-lg py-3 text-base  gap-4">
                    <div>
                        {{ getStarsAvarage }}   {{ ratings.length }}  değerlendirmenin tümünü göster
                    </div>
                    <div>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 18px; width: 18px; fill: currentcolor;">
                            <path d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill-rule="evenodd"></path>
                        </svg>
                    </div> 
                    <CommentModal v-show="openComment" @close-modal="openComment = false" :ratings="ratings"/>   
                </div>  
        </div>
      
        

        
    </div>
    
</template>