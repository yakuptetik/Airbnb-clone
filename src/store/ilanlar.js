import { defineStore } from 'pinia'
import axios from "axios"
import { ref } from 'vue'

export const useIlanlarStore = defineStore('ilanlar', () => {
    const ilanlar = ref(null)

    function filteredIlans(search) {
      if(ilanlar.value && search) {
        return ilanlar.value.filter((ilan) => {
          return ilan.name.toLowerCase().includes(search.toLowerCase()) || ilan.locaiton.toLowerCase().includes(search.toLowerCase()) ;
        })
      }

      return ilanlar.value;
    }

    function getIlan(ilanId) {
      return ilanlar.value.find((ilan) => ilan.id === Number(ilanId))
    }

    function fetchIlanlar() {
        axios.get('/ilanlar.json')
          .then((response) => {
            ilanlar.value = response.data;
          })
          .catch(() => {
  
          });
      }

      function changeWish(id, isWish) {
        const existingilan = ilanlar.value.find((ilan) => ilan.id === id)
        existingilan.isWish = isWish;
      }

    return { ilanlar , fetchIlanlar, getIlan, changeWish, filteredIlans }
  })