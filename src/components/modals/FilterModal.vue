<script setup>

</script>
<template>
    <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')">
      <div class="bg-white  h-[690px] w-[780px] rounded-xl" @click.stop>
        <div class="p-6 relative ">
          <div class="cursor-pointer absolute " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
           </div>
           <div class="flex  items-center justify-center font-bold">
            Filtreler
        </div>
        </div>   
        <hr class="w-full">
     
        <div class="text-base w-full h-full items-center flex justify-center">
            <div class=" flex justify-end items-end">
                to be continued...
            </div>
        </div>
       

        </div>

       </div>

  </template>