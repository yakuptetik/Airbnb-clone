
<script setup> 
defineProps({
    ilan:Object,
    desc:String,
    placeDetails:String,
    attention:String
})
</script>
<template>
    <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')">
      <div class="bg-white p-6  w-[780px] rounded-xl" @click.stop>
        <div class=" relative ">
          <div class="cursor-pointer absolute " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
          </div>
        </div>
        <div   class="">
            <div class="text-[26px] font-bold">
                Bu mekân hakkında
            </div>
            <div>
                {{ desc }}
            </div>
            <div>
                Mekan
            </div>
            <div>
                {{ placeDetails}}
            </div>
            <div>
                Dikkat edilecek diğer şeyler
            </div>
            <div>
                {{ attention }}
            </div>
        </div>
      </div>
    </div>
  </template>