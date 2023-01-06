<script setup> 
defineProps({
ratings:Object,

})

</script>

<template>
<div class="flex justify-center bg-[#00000086]  fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')">
<div class="overflow-y-hidden  bg-white p-6 w-full  h-[90%] mx-56  rounded-xl" @click.stop>
        <div class=" relative ">
            <div class="cursor-pointer fixed flex " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
            </div>
        </div>
        <div class="grid grid-cols-3 w-full h-full mt-7 ">
            <div>
                <div class="text-[26px] w-full flex gap-2">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path>
                    </svg> {{ ratings.rate }} · {{ ratings.length }} değerlendirme
                </div>
                <div class="mt-10">
                    <div v-for="index in 6"  class="flex items-center justify-between  h-10 w-full">
                        <div class="w-full">
                            wefrvd
                        </div>
                        <div class="gap-1 flex items-center w-full pr-20" >
                            <div  class="w-full bg-white rounded-full h-1">
                                <div class="bg-black h-1 rounded-full w-[100%]">
                                </div>
                            </div>
                        <div class="text-xs">{{ raters }}</div> 
                        </div>
                    </div>  
                </div>
                
            </div> 
            <div class="col-span-2 h-full w-full overflow-y-auto">
                <div class="bg-white  sticky top-0 pb-6">
                    <div class="border mr-5 z-10 pl-6 gap-3  bg-gray-50 rounded-full h-11 flex items-center py-4">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><g fill="none">
                            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g>
                        </svg>
                        <div class="text-black font-thin text-[14px]">
                          Değerlendirmenizi arayın
                        </div>
                    </div>
                </div>

                <div  v-for="rating in ratings" :key="ratings" class="mt-12">
                    <div class="w-full pb-12 pr-24">
                        <div class="flex gap-3">
                                <img class="h-10 w-10 rounded-full" :src="rating.image" alt="">              
                            <div class="pb-4 ">
                                <div class="text-base">
                                    {{ rating.raters }}
                                </div>
                                <div class="text-[14px]">
                                    {{rating.date }}
                                </div> 
                            </div> 
                        </div>
                        <div class="text-base font-light">
                        {{ rating.description }}
                        </div>
                    </div>       
                </div> 
            </div>  
        </div>
    </div>  
</div>
</template>