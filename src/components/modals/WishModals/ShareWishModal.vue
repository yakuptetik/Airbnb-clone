<script >
import ShareWaysModalVue from './ShareWaysModal.vue'
export default {
    components: { ShareWaysModalVue },
    data() {
      return {
        share: false,
      }
    },
  }
</script>
<template>
    <div class="flex z-50 justify-center items-center bg-[#00000086]  fixed top-0 bottom-0 right-0 left-0" @click="$emit('close-modal')">
      <div class="bg-white shadow-2xl h-[332px]  w-[568px] rounded-xl" @click.stop>
        <div class=" flex justify-center items-center relative px-6 border-b h-[64px]">
          <div class="cursor-pointer absolute left-6" @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
          </div>
          <div   class="flex items-center justify-center font-semibold">
            Nasıl paylaşmak istiyorsunuz?
          </div>   
        </div> 
        <div class="p-6">
          <div class="p-2">
            <div class="flex items-center px-6 py-4 h-full border rounded-xl hover:border-black">
              <div>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; fill: currentcolor;"><path d="M21.768 5.354l9.293 9.292.116.128a2 2 0 0 1 0 2.574l-.116.127-9.293 9.293-1.414-1.414 9.292-9.293-9.292-9.293zm-11.536 0l1.414 1.414-9.292 9.293 9.292 9.293-1.414 1.414L.94 17.475a2 2 0 0 1-.116-2.701l.116-.128zM16 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>
              </div>
              <div class="ml-6">
                <div class="text-base font-medium">
                  Bağlantı gönderin
                </div>
                <div class="text-sm font-light pt-1 text-gray-700">
                Bağlantıya sahip olan herkes görüntüleyebilir
                </div>
             </div>
            </div>
            <div class="flex  h-full items-center px-6 py-4 border rounded-xl mt-7 hover:border-black">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; fill: currentcolor;"><path d="M32,25H30a8.007,8.007,0,0,0-7-7.93054V14.81573a3.00011,3.00011,0,1,0-2-.00006v2.25379a7.958,7.958,0,0,0-3.50024,1.33246A9.95129,9.95129,0,0,1,20,25H18a7.95162,7.95162,0,0,0-2-5.27905,8.057,8.057,0,0,0-1.49969-1.319A7.958,7.958,0,0,0,11,17.06946V14.81573a3.00011,3.00011,0,1,0-2-.00006v2.25379A8.007,8.007,0,0,0,2,25H0a10.01615,10.01615,0,0,1,6.54834-9.38574,5,5,0,1,1,6.90332,0A9.98322,9.98322,0,0,1,16,17.00879a9.98325,9.98325,0,0,1,2.54785-1.39453,5,5,0,1,1,6.9043,0A10.01571,10.01571,0,0,1,32,25Z"></path></svg>
              </div>
             <div class="pl-6">
                <div class="text-base font-medium">
                  Bağlantı gönderin
                </div>
                <div class="text-sm font-light pt-1 text-gray-700">
                Bağlantıya sahip olan herkes görüntüleyebilir
                </div>
             </div>
            </div>
          <div>
        </div>

</div>



        </div>

       
     
    
        <ShareWaysModalVue v-show="share" @close-modal="share = false"/>
       </div>
    </div>
  </template>