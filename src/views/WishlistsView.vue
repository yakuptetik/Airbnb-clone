<script setup>

import { useWishesStore } from '../store/wishes'
import Navbar from '../components/Navbar.vue';
import WishGrid from '../components/WishGrid.vue';

const wishesStore = useWishesStore();


</script>
<template>
    <div class="px-[80px]">
      <Navbar/>
    </div>
    <hr>
    <div  class="px-[80px]">
        <WishGrid :wishes="wishesStore.wishes"/>
    </div>
        


</template>