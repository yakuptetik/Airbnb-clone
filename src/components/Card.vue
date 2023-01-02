<script setup>
import IconBase from './Icons/IconBase.vue';
import StarVoteIcon from './Icons/StarVoteIcon.vue';
import { ref } from 'vue';
import LikesIcon from './Icons/LikesIcon.vue';
import UnLikesIcon from './Icons/UnLikesIcon.vue';
import SavedModal from './modals/SavedModal.vue';
import { useWishesStore } from '../store/wishes';



const wishesStore = useWishesStore();
const showModal = ref(false)

const props = defineProps({
    ilan:Object,
    wishId:Object,
})
function handleClick(){
    if (!props.ilan.isWish) {
        showModal.value = true
    }  
    else  {
        wishesStore.removeWish(props.wishId, props.ilan.id);
    }

}
</script>
<template>
    <button class="absolute right-4 top-4" @click="handleClick()">
        <div>   
            <component :is="ilan.isWish ? LikesIcon : UnLikesIcon " />
        </div> 
    </button>
    <router-link
        :to="{ name: 'Advert', params: { id: ilan.id }}"
        class="rounded-xl h-full w-full flex flex-col"
    > 
        <div class="overflow-hidden  h-full w-full rounded-xl ">
            <img class="z-20 h-full w-full" :src="ilan.images[0]" alt="">
        </div>
        <div class="flex  text-base pt-2 justify-between items-center">
            <div> 
                {{ilan.locaiton}}
            </div>
            <div class="flex items-center justify-center gap-1">
                
            <IconBase :width="12" :height="12">
                    <StarVoteIcon/>
                </IconBase>
                <div class="text-sm font-light">
                    {{ ilan.vote }}
                </div>
                
            </div> 
        </div>
        <div class="text-gray-500 text-[15px]">
            {{ilan.name}}
        </div>
        <div class="text-gray-500 text-[15px]">
            {{ilan.date}}
        </div>
        <div class="text-black text-[15px]">
            {{ilan.price}} ₺ <span class="text-gray-500 text-[15px]">gece</span>
        </div>
    </router-link>

    <SavedModal v-show="showModal" :ilan="ilan" @close-modal="showModal = false" />
</template>