
<script setup>
import WishCard from './WishCard.vue';





defineProps({
  wishes:Object,
  items:Object,
  ilanlar:Object
})


</script>

<template>
   <div class="text-[32px] pt-12 pb-4">
        Favoriler
    </div>
  <div class="grid gap-6 grid-cols-3 mt-4 h-full w-full">
   
    <div v-for=" wish in wishes" :key="wish.id" class="relative">
      <WishCard :wish="wish" />
    </div>

  </div>
</template>

