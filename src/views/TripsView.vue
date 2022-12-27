<script setup>

import Navbar from '../components/Navbar.vue';



</script>
<template>
    <div class="px-[80px]">
      <Navbar/>
    </div>
    <hr>
    <div class="px-[80px]">
        <div class="border-b text-[32px] pt-8 pb-6 font-medium">
            Seyahatler
        </div>
        <div class="pt-8 pb-[54px] border-b">
            <div class="text-[22px] font-medium">
                Henüz seyahat rezervasyonu yok.
            </div>
            <div class="text-base  pb-7 text-gray-600">
                Bavullarınızı çıkartıp bir sonraki serüveninizi planlamaya başlama zamanı
            </div>
            <router-link class="border border-black rounded-lg text-base  py-3 px-6" to="/">
                Aramaya başlayın   
            </router-link>
        </div>
        <div class="flex items-center text-[14px] pt-5">
            <div class="font-light">
                Rezervasyonunuzu burada bulamıyor musunuz?
            </div>
            <div class="font-medium underline pl-1">
                Yardım Merkezi'ni ziyaret edin
            </div>
        </div>
    </div>

        


</template>