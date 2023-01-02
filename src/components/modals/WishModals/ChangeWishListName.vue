<script setup >

</script>
<template>
    <div class="flex z-50 justify-center items-center fixed top-0 bottom-0 right-0 left-0" @click="$emit('close-modal')">
      <div class="bg-white shadow-2xl h-[321px] w-[400px] rounded-xl" @click.stop>
        <div class=" flex justify-between items-center  px-6 border-b h-[64px]">
          <div class="cursor-pointer  " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
        </div>
        <div   class="flex items-center justify-center font-semibold">
            Ayarlar
        </div> 
        <div  class="flex items-center justify-center font-semibold underline">
            Sil
        </div>
   
        </div>
        <!-- <DeleteWishNameModal v-show="deleteFavList" @close-modal="deleteFavList = false"/> -->
        <div class="py-8 px-4 border-b h-[160px]">
            <div class="relative">
                <input v-model="name" type="text" id="float" class="rounded-lg block  focus:border-black border border-gray-400 focus:border-2  px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 focus:outline-none peer" placeholder=" " />
                <label for="float" class="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ad</label>
            </div>
            <div class="text-xs text-[#717171] pt-2">
                Maksimum 50 karakter
            </div>
        </div>
        
        <div class="py-4 px-6 h-[81px] flex items-center justify-between">
            <div   class="flex items-center justify-center font-semibold underline">
            İptal et
        </div>
            <button type="button" class="   text-white bg-black cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>
            Kaydet
            </button>
        </div>
       </div>
    </div>
  </template>