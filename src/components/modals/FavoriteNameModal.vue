<script setup>
import { useWishesStore } from '../../store/wishes'
import {ref} from 'vue'


const title = ref('')
const isLoading = ref(false)

const emit = defineEmits([
  'close-modal'
])

  
const props = defineProps({
    ilan:Object
})

function createWish() {
    isLoading.value = true
    setTimeout(() => {
    isLoading.value = false
    const wishesStore = useWishesStore();
    wishesStore.createWish(props.ilan, title.value);
    emit('close-modal')
  }, 2000)
}
</script>
<template>
    <div class="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20" @click="$emit('close-modal')">
      <div class="bg-white h-[305px] w-[550px] rounded-xl shadow-xl" @click.stop>
        <div class=" flex justify-center items-center relative px-6 border-b h-[64px]">
          <div class="cursor-pointer absolute left-6" @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
        </div>
        <div   class="flex items-center justify-center font-semibold">
            Bu istek listesini adlandırın
        </div>   
        </div>
        <div class="py-8 px-4 border-b h-[160px]">
            <div class="relative">
                <input  v-model="title" type="text" id="float" class="rounded-lg block  focus:border-black border border-gray-400 focus:border-2  px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 focus:outline-none peer" placeholder=" " />
                <label for="float" class="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ad</label>
            </div>
            <div class="text-xs text-[#717171] pt-2">
                Maksimum 50 karakter
            </div>
        </div>
        <div class="py-4 px-6 h-[81px] flex items-end justify-end">
            <!-- <button :disabled="!title.length"  @click="createWish()" type="button" class=" w-full h-full text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Oluştur 
            </button> -->
            <button   @click="createWish()"  :disabled="!title.length"  type="button" class="text-white bg-black w-full h-[48px]   font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 inline-flex justify-center items-center">
          <template v-if="isLoading">
            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Loading...
          </template>
          <template v-else>
             Oluştur
          </template>
        </button>
        </div>
    
      


       </div>
    </div>
  </template>