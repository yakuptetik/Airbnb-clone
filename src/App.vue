<script setup>
import { onMounted } from 'vue'
import { useIlanlarStore } from './store/ilanlar'
import { useWishesStore } from './store/wishes'

onMounted(() => {
  const ilanlarStore = useIlanlarStore();
  const wishesStore = useWishesStore();

  wishesStore.fetchWishes();
  ilanlarStore.fetchIlanlar();
})

</script>

<template>

  <div class="font-sans ">
  <router-view/>
  </div>

  
</template>

