<script setup>

</script>
<template>
    <div class="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0" @click="$emit('close-modal')">
      <div class="bg-white h-[230px] w-[400px] rounded-xl" @click.stop>
        <div class=" flex justify-center items-center relative px-6 border-b h-[64px]">
          <div class="cursor-pointer absolute left-6" @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
        </div>
        <div   class="flex items-center justify-center font-semibold">
            Bu istek listesini adlandırın
        </div>   
        </div>
     
        <div class="py-4 px-6 h-[81px] flex items-end justify-end">
            <button type="button" class=" w-full h-full   text-white bg-black cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>
            Oluştur
            </button>
            </div>
       </div>
    </div>
  </template>