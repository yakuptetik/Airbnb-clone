<script setup>
import IconBase from '../components/Icons/IconBase.vue';
import TranslateIcon from '../components/Icons/TranslateIcon.vue'
import StarVoteIcon from './Icons/StarVoteIcon.vue'
import { ref } from 'vue';
import ShareModal from './modals/ShareModal.vue';

const openModal = ref(false)


defineProps({
    desc: String,
    title: String,
    locaiton:String  
})
</script>
<template>
      <div class="flex justify-start items-center gap-3 pt-5">
    <div>
    <IconBase viewBox="0 0 16 16" height="24" width="24">
        <TranslateIcon/>
    </IconBase>
    </div>
    <div class="text-[26px] tracking-[0.06rem]">
        {{ title }}
    </div>
    </div> 
    <div class="flex justify-between items-center pt-1 text-[14px]">
        <div class="flex justify-start items-center gap-1">
            <div class="flex items-center gap-1">
            <IconBase viewBox="0 0 32 32" height="14" width="14">
                <StarVoteIcon/>
            </IconBase>
            <div>
                5,0  ·

            </div>
            </div>
            <div class="underline">
                20 değerlendirme
            </div>
            <div class="flex justify-end items-center gap-2">
                · <img class="h-3 w-2" src="../assets/images/Ekran Resmi 2022-12-13 09.43.54.png" alt="">  <div class="font-light">
                    Süper Ev Sahibi 
                </div> ·
            </div>
            <div class="underline">
               {{ locaiton }}
            </div>
        </div>
        <div class="flex justify-end items-center gap-5">
            <div @click="openModal = true" class="flex items-center gap-2">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
                <div class="underline">
                    Paylaş
                </div>
            </div>

            <div class="flex justify-end items-center gap-2">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
               <div class="underline">
                Kaydet
               </div>
            </div>
        </div>

        <ShareModal :shareItems="shareItems" v-show="openModal" @close-modal="openModal = false"/>

    </div>

</template>