<script setup>
import Navbar from '../components/Navbar.vue';
import AdvertImageComp from '../components/AdvertImageComp.vue';
import DetailsPageComp from '../components/DetailsPageComp.vue';
import { useIlanlarStore } from '../store/ilanlar'
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import DetailsPageTabComp from '../components/DetailsPageTabComp.vue';
import CommentComp from '../components/CommentComp.vue';
import CommentModal from '../components/modals/CommentModal.vue'

const openComment = ref(false)
const route = useRoute();
const ilanlarStore = useIlanlarStore();
const ilan = ref(null)

async function fetchIlan() {
    ilan.value = ilanlarStore.getIlan(route.params.id);
}

fetchIlan();

</script>

<template>
    <div class="px-[160px] min-[1200px]:px-[160px] max-[1200px]:px-[80px]">
      <Navbar/>
    </div>
    <hr>
    <div class="px-[160px] min-[1200px]:px-[160px] max-[1200px]:px-[80px]  h-screen w-screen ">
        <template v-if="ilan">
            <div>
                <DetailsPageTabComp
                :title="ilan.title" 
                :locaiton="ilan.locaiton"
                :vote="ilan.vote"
                />
            </div>  
        </template>

        <template v-if="ilan">
            <div class="relative">
                <div class="absolute bottom-6 right-6 flex items-center justify-center bg-white h-8 text-sm rounded-lg px-4 py-2 gap-2">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill-rule="evenodd"></path></svg>
                    <div  class="">
                        T??m foto??raflar?? g??ster
                    </div>
                </div>
                <div  class="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden h-[410px] mt-6">
                    <AdvertImageComp  v-for="image in ilan.images" :key="image" :image="image"/>
                </div>  
            </div>
        </template>

        <template v-if="ilan">
            <div class="pb-10">
                <DetailsPageComp  
                :owner="ilan.owner"
                :desc="ilan.description"
                :price="ilan.price"
                :title="ilan.title"
                :maxcustomer="ilan.maxcustomer"
                :bedroom="ilan.bedroom"
                :maxbed="ilan.maxbed"
                :bathromm="ilan.bathromm"
                :explane="ilan.explane"
                :profilPic="ilan.profilPic"
                :facilities="ilan.facilities"
                :vote="ilan.vote"
                />  
            </div>  
        </template>
        <template v-if="ilan">
            <div class="pb-10">
                <CommentComp :ratings="ilan.ratings"/>
            </div>  
        </template>
       
    </div>


 

  
</template>