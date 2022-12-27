
<script setup>
import Card from './Card.vue';
defineProps({
  ilanlar:Object
})


</script>

<template>
  <div class="grid grid-rows-none gap-6 grid-cols-4 mt-6 h-full w-full lg:grid-cols-4 md:grid-cols-3  min-[570px]:grid-cols-2 max-[570px]:grid-cols-1  pb-12">
    <div v-for=" ilan in ilanlar" :key="ilan.id" class="relative">
      <Card :ilan="ilan" />
    </div>
  </div>
</template>
