<script setup>

defineProps({
    wish:Object,
    items:Object,
})
</script>

<template>

         <router-link to="/collections" class="w-full"> 
            <div  class="grid grid-cols-3 rounded-3xl  overflow-hidden h-[220px]">
                <div v-for="index in 3" class="border first:col-span-2 first:row-span-2 overflow-hidden">
                    <img class="w-full h-full object-fill" :src="wish.items[0].images[0]" alt="">
                </div>
              </div>  
        <div class="flex text-[22px] pt-2 items-center">
            <div> 
                {{ wish.title }}
            </div>    
        </div>
    </router-link>  


  

</template>