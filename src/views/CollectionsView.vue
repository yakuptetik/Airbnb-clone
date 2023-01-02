<script setup>
import ChangeWishListName from '../components/modals/WishModals/ChangeWishListName.vue';
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue';
import { ref } from 'vue';
import ShareWishModal from '../components/modals/WishModals/ShareWishModal.vue';
import { useWishesStore } from '../store/wishes';
import { useIlanlarStore } from '../store/ilanlar'
import { useRoute } from 'vue-router';

const ilanlarStore = useIlanlarStore();

const route = useRoute();
const wishesStore = useWishesStore();
const wish = ref()

async function getWish() {
    wish.value = wishesStore.getWish(route.params.id);
}

getWish();



const changeName = ref(false)
const shareWish = ref(false)


</script>

<template>
  <div class="relative">
      <div class="px-6 bg-white w-full fixed top-0 left-0 right-0">
        <Navbar/>
      </div>
      <hr> 
      <div class="flex mt-[80px] overflow-y-auto ">
        <div class="w-3/5 p-6">       
          <div class="flex items-center justify-between">
            <div  @click="$router.back()">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m4 16h26"></path><path d="m15 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
            </div>     
            <div class="flex gap-4">
              <div @click="shareWish = true" class="cursor-pointer">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
              </div>
              <div @click="changeName = true"  class="cursor-pointer">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 18px; width: 18px; fill: currentcolor;"><path d="M3 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
              </div>
            </div>
              <ShareWishModal v-show="shareWish" @close-modal="shareWish = false"/>
          </div>

          <div class="grid grid-rows-none gap-6 grid-cols-2 mt-6 h-full w-full lg:grid-cols-2 md:grid-cols-2  min-[570px]:grid-cols-2 max-[570px]:grid-cols-1  pb-12">
            <div v-if="wish" v-for=" ilan in wish.items" :key="ilan.id" class="relative">
              <Card :ilan="ilan" />
            </div>
          </div>
         <ChangeWishListName v-show="changeName" @close-modal="changeName = false"/>
       
      </div>

      <div class="w-2/5 fixed top-20  -z-50 right-0 bottom-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8514.307281066966!2d29.030255837715426!3d40.2662410320713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1671622684591!5m2!1str!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

     </div>
  </div>
 


 
</template>