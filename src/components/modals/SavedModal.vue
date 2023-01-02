<script setup>
import { useWishesStore } from '../../store/wishes'
import FavoriteNameModal from './FavoriteNameModal.vue';  
import {ref} from 'vue'

const wishesStore = useWishesStore();

const showModals = ref(false)

const props = defineProps({
  ilan:Object
})  

const emit = defineEmits([
  'close-modal'
])  

function addWish(id) {
  wishesStore.addWish(props.ilan, id);
  emit('close-modal')
}

function handleClose() {
  showModals.value = false
  emit('close-modal')
}
</script>

<template>
    <div class="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 bottom-0 right-0 left-0 z-40" @click="$emit('close-modal')">
      <div class="bg-white w-[568px] rounded-xl shadow-xl" @click.stop>
        <div class=" flex justify-center items-center relative px-6 border-b h-[64px]">
          <div class="cursor-pointer absolute left-6" @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
          </div>
        <div class="flex items-center justify-center font-semibold">
            Favorileriniz
        </div>   
        </div>
        <div class="px-4 py-5">
          <div @click="showModals = true" class="flex items-center gap-4 py-2 cursor-pointer">
            <div class="">
              <img class="h-[64px] w-[64px]" src="https://a0.muscache.com/im/pictures/da1a2f06-efb0-4079-abce-0f6fc82089e0.jpg" alt="">
            </div>
            <div class="text-base font-medium">
                Yeni istek listesi oluşturun
            </div>
          </div>

          <div @click="addWish(wish.id)" v-for="wish in wishesStore.wishes" :key="wish.id+'wish'" class="flex items-center gap-4 pt-3  cursor-pointer">
            <div class="">
              <img class="h-[64px] rounded-lg w-[64px]" :src="wish.items[0].images[0]" alt="">
            </div>
            <div class="text-base font-medium">
                {{ wish.title }}
            </div>
          </div>
          <div>
          
          </div>
        </div>
        <FavoriteNameModal :ilan="ilan" v-show="showModals" @close-modal="handleClose"/> 
      </div>  
    </div>
  </template>
