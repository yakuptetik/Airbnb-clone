import { defineStore } from 'pinia'
import axios from "axios"
import { ref } from 'vue'
import { useIlanlarStore } from './ilanlar'

export const useWishesStore = defineStore('wishes', () => {
    const wishes = ref([])

    function getWish(wishId) {
        return wishes.value.find((wish) => wish.id == wishId)
    }

    function fetchWishes() {
        axios.get('/collection.json')
          .then((response) => {
            wishes.value = response.data;
          })
          .catch(() => {
  
          });
    }

    function createWish(ilan, title){
      const ilanlarStore = useIlanlarStore();
      const existingilan = ilanlarStore.ilanlar.find((il) => il.id === ilan.id)
      existingilan.isWish = true;
      wishes.value.push({ id: crypto.randomUUID(), title, items: [
        ilan
      ] })
    }
    
    function addWish(ilan, id){
      const ilanlarStore = useIlanlarStore();
      const existingilan = ilanlarStore.ilanlar.find((il) => il.id === ilan.id)
      existingilan.isWish = true;
      
      const existingWish = wishes.value.find((wish) => wish.id === id)
      existingWish.items.push(ilan);
    }

    function removeWish(wishId, ilanId) {
      const ilanlarStore = useIlanlarStore();
      ilanlarStore.changeWish(ilanId, false);
      
      const existingWish = wishes.value.find((wish) => wish.id === wishId)

      const existingIlanIndex = existingWish.items.findIndex((item) => item.id === ilanId)
      wishes.value.splice(existingIlanIndex, 1)
    }
    return {
      wishes,
      getWish,
      fetchWishes,
      addWish,
      removeWish,
      createWish
    }
})