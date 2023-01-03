<script setup>
import IconBase from '../components/Icons/IconBase.vue'
import DoorIcon from '../components/Icons/DoorIcon.vue'
import Calendar from '../components/Icons/CalendarIcon.vue'
import Key from '../components/Icons/KeyIcon.vue'
import TranslateIcon from '../components/Icons/TranslateIcon.vue'
import { ref } from 'vue'
import StarVoteIcon from './Icons/StarVoteIcon.vue'
import DescriptionModal from './modals/DescriptionModal.vue'

const  openDesc =ref(false)

const count = ref(0)
const counter = ref(0)
const counters = ref(0)
const counts = ref(0)

defineProps({
    desc: String,
    owner:String,
    price:String,
    title:String,
    maxcustomer:String,
    bedroom:String,
    maxbed:String,
    bathromm:String,
    explane:String,
    facilities:Array,
    vote:String,
    profilPic:String
})
</script>

<template>
    <div class="grid grid-cols-5 gap-4 pt-12">
        <div class=" col-span-3   mr-3">
            <div class="flex border-b pb-6 items-center col-span-3 justify-between">
                <div>
                    <div class="flex text-[22px] items-center justify-start gap-2">
                        <div>
                        {{ explane }}
                        </div>
                    ·
                        <div>
                        Ev sahibi: {{ owner }}
                        </div> 
                    </div>
                    <div class="flex items-center justify-start text-[16px] gap-1 font-light">
                        <div>
                            {{ maxcustomer }}  misafir
                        </div>
                        ·
                        <div>
                            {{ bedroom }} yatak odası
                        </div>
                        · 
                        <div>
                        {{ maxbed }} yatak
                        </div>
                        ·
                        <div>
                            {{ bathromm }} banyo
                        </div> 
                    </div> 
                </div>
                <div class="">
                    <img class="h-[56px] w-[56px] rounded-full" :src="profilPic" alt="">
                </div>
            </div>  
            <div class="py-8 border-b">
                <div class="flex">
                    <div class="pt-1">
                        <IconBase>
                            <DoorIcon/> 
                        </Iconbase>
                    </div>
                    <div class="pl-4">
                        <div class="text-[16px] pb-1 font-medium">
                            Kendi kendine giriş
                        </div>   
                        <div class="text-[14px] opacity-70">
                            Kapı görevlisi yardımıyla giriş yapabilirsiniz.
                        </div>
                    </div>
                </div>
                <div class="flex py-4">
                    <div class="pt-1">
                        <IconBase>
                        <Key/>
                        </Iconbase>
                    </div>
                    <div class="pl-4">
                        <div class="text-[16px] pb-1 font-medium">
                            Mükemmel giriş deneyimi
                        </div>   
                        <div class="text-[14px] opacity-70">
                            Yakın zamanda konaklayan misafirler giriş işlemine %100 oranında 5 yıldızlı puan verdi.
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="pt-1">
                        <IconBase>
                            <Calendar/>
                        </Iconbase>
                    </div>
                    <div class="pl-4">
                        <div class="text-[16px] pb-1 font-medium">
                            48 saat içinde ücretsiz iptal.
                        </div>   
                    </div>
                </div>
            
            </div>
            <div class="h-12 w-[120px] py-8 ">
                <img src="../assets/images/54e427bb-9cb7-4a81-94cf-78f19156faad.webp" alt="">
            </div>
            <div class="text-[16px] mb-4 mt-2">
                Her rezervasyon ev sahibi iptallerine, kayıt hatalarına ve girişle ilgili problemler gibi diğer sorunlara karşı ücretsiz olarak koruma altındadır.
            </div>
            <div class="underline font-medium border-b pb-8">
                Daha fazla bilgi edinin
            </div>
            <div class="flex items-center gap-3 pt-8">
                <div>
                    <IconBase viewBox="0 0 16 16" :height="16" :width="16">
                        <TranslateIcon/>
                    </IconBase>
                </div>
                <div>
                    Bazı bilgiler otomatik olarak çevrilmiştir
                </div>
                <div class="underline font-medium">
                    Orijinal dilde göster
                </div>
            </div>
            <div  class="pt-8">
                {{ desc }}
            </div>
            <div>
                {{ facilities }}
            </div>
            <div  @click="openDesc = true" class="font-medium border-b pt-6 text-base flex items-center pb-10 justify-start underline gap-1">
                Daha fazlasını göster<svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 12px; width: 12px; display: block; fill: var(--f-k-smk-x);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg>
            </div>
            <div class="border-b  pb-10">
                <div class="text-[22px] font-semibold pt-10">
                    Bu mekân size neler sunuyor?
                </div>
                <div class="grid grid-rows-5 grid-flow-col pt-4">
                    <div v-for="index in 10" class=" border py-2 px-4">
                                deneme
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full  pt-10">
                <div class="flex bg-white"> 
                    <div class="flex flex-col">
                        <div class="flex divide-x">
                            <div class="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
                                    <div class="flex items-center justify-between">
                                        <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50" >
                                            <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path d="M13.25 8.75L9.75 12l3.5 3.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    <div class="text-sm font-semibold">
                                        Ocak 20223
                                    </div>
                                        <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                            <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="grid grid-cols-7 text-xs text-center text-gray-900">
                                        <span
                                            class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Mo
                                        </span>
                                        <span
                                            class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Tu
                                        </span>
                                        <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            We
                                        </span>
                                        <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Th
                                        </span>
                                        <span
                                            class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                            Fri
                                        </span>
                                        <span
                                            class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
                                        >
                                            Sa
                                        </span>
                                        <span
                                            class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
                                        >
                                            Su
                                        </span>

                                        <span v-for="index in 26" class="flex items-center justify-center w-10 h-10 text-gray-400 line-through rounded-lg">
                                            {{ index++ }}
                                        </span>
                                        <span class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                                            27
                                        </span>
                                        <span class="flex items-center justify-center w-10 h-10  text-black bg-gray-100">
                                            28
                                        </span> <span class="flex items-center justify-center w-10 h-10 text-black bg-gray-100 ">
                                            29
                                        </span> <span class="flex items-center justify-center w-10 h-10 text-black bg-gray-100 ">
                                            30
                                        </span>
                                        <span class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                                            31
                                        </span>
                                    </div>
                            </div>
                            <div class="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
                                <div class="flex items-center justify-between">
                                    <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                        <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                            <path d="M13.25 8.75L9.75 12l3.5 3.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <div class="text-sm font-semibold">
                                        Şubat 2023
                                    </div>
                                    <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                                        <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                                            <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="grid grid-cols-7 text-xs text-center text-gray-900">
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Mo
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Tu
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        We
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Th
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Fri
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Sa
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                                        Su
                                    </span>
                                    <span v-for="index in 29" class="flex items-center justify-center w-10 h-10  rounded-none rounded-tl-lg">
                                        {{ index++ }}
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                                        1
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                                        2
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 rounded-lg" >
                                        3
                                    </span>
                                    <span class="flex items-center justify-center w-10 h-10 rounded-lg" >
                                        4
                                    </span>                                                         
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end px-6 py-4">
                          
                            <div class="flex items-center space-x-2">
                                <div class="px-4 py-2 text-sm text-black underline rounded-lg cursor-pointer">
                                    Kesin tarihler
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionModal :desc="desc"
            v-show="openDesc" @close-modal="openDesc = false" />
        </div>
        <div class="col-span-2">
            <div>
            <div class="flex items-end justify-end">
                <div class="rounded-xl border-2 shadow-xl  p-6 w-[85%]">
                    <div class="w-full flex justify-between items-center pb-6">
                        <div class="flex gap-2  ">
                            <div class="font-medium text-[22px] flex items-end justify-start">
                                {{ price }} ₺
                            </div>
                            <div class="text-md flex items-center font-light">
                                gece
                            </div>    
                        </div>
                        <div class="flex gap-2 text-sm ">
                            <div class="font-medium flex items-center gap-1">
                                <IconBase viewBox="0 0 32 32" :height="12" :width="12">
                                    <StarVoteIcon/>
                                </IconBase>   
                            <div>
                                {{ vote }} · 
                            </div>
                            </div>
                            <div class="flex items-center font-light underline">
                                19 değerlendirme
                            </div>    
                        </div>
                    </div> 
                    <div class="grid grid-cols-2 mt-6 cursor-pointer">
                        <div class="border-r border-t border-l  border-gray-400 rounded-tl-lg p-3">
                            <div class="uppercase text-[10px] font-bold">
                                gİrİş
                            </div> 
                            <div class="text-sm font-light text-gray-500">
                                Tarih ekleyin
                            </div>
                        </div>
                        <div class=" border-t border-r p-3 border-gray-400 rounded-tr-lg">
                            <div class="uppercase text-[10px] font-bold">
                            çıkış
                            </div> 
                            <div class="text-sm font-light text-gray-500">
                                Tarih ekleyin
                            </div>
                        </div>
                        <div class="col-span-2 ">
                            <button class="group w-full border focus:border-black focus:border-2 focus:rounded-lg rounded-b-lg  border-gray-400 relative">
                                <div class="flex items-center justify-between p-3 relative">
                                    <div>
                                        <div class="uppercase text-[10px] font-bold">
                                            mİsafİr sayısı
                                        </div> 
                                        <div class="text-sm font-light text-gray-500">
                                            1 misafir
                                        </div>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 32 32"  aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                    </div>  
                                </div> 
                                    <div class="hidden w-[320px] border border-gray-400  rounded  p-4 pt-1 text-left bg-white text-black absolute shadow-xl z-10 group-focus-within:block">           
                                    <div class="pt-4 items-center flex justify-between cursor-pointer ">
                                        <div>
                                            <div class="font-medium text-base">
                                                Yetişkinler
                                            </div>
                                            <div class="text-sm font-light text-gray-500">
                                                13 yaş ve üstü
                                            </div>

                                        </div>
                                        <div class="flex items-center justify-between gap-4">
                                            <div  @click="count--"  class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg>
                                            </div>
                                            <div  class="text-base">
                                                {{ count }}
                                            </div>
                                            <div @click="count++" class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div class=" py-4 items-center flex justify-between cursor-pointer ">
                                        <div>
                                            <div class="font-medium text-base">
                                                Çocuklar
                                            </div>
                                            <div class="text-sm font-light text-gray-500">
                                                2-12 yaş
                                            </div>

                                        </div>
                                        <div class="flex items-center justify-between gap-4">
                                            <button  @click="counts--"  class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg>
                                            </button>
                                            <div  class="text-base">
                                                {{ counts }}
                                            </div>
                                            <button @click="counts++" class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg>
                                            </button>

                                        </div>
                                    </div>
                                    <div class="items-center flex justify-between cursor-pointer ">
                                        <div>
                                            <div class="font-medium text-base">
                                                Bebekler
                                            </div>
                                            <div class="text-sm font-light text-gray-500">
                                                2 yaş ve altı
                                            </div>

                                        </div>
                                        <div class="flex items-center justify-between gap-4">
                                            <button  @click="counter--"  class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg>
                                            </button>
                                            <div  class="text-base">
                                                {{ counter }}
                                            </div>
                                            <button @click="counter++" class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg>
                                            </button>

                                        </div>
                                    </div>
                                    <div class=" py-4 items-center flex justify-between cursor-pointer ">
                                        <div>
                                            <div class="font-medium text-base">
                                                Evcil hayvanlar
                                            </div>
                                            <div class="text-sm font-normal text-black underline">
                                                Yanınızda hizmet hayvanı mı getiriyorsunuz?
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between gap-4">                                  
                                            <button  @click="counters--"  class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28"></path></svg>
                                            </button>
                                            <div  class="text-base">
                                                {{ counters }}
                                            </div>
                                            <button @click="counters++" class="border rounded-full h-8 w-8 items-center flex justify-center">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path d="m2 16h28m-14-14v28"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class=" py-4   cursor-pointer ">           
                                        <div class="font-light text-gray-500 text-xs">
                                            Bu yerde bebekler hariç en fazla 6 misafir konaklayabilir. Evcil hayvan kabul edilmez.
                                        </div>
                                    </div>
                                    <div class="underline text-base flex items-center justify-end">
                                        Kapat
                                    </div>
                                
                                </div>
                            </button>  
                        </div>
                    </div>
                    <div class="bg-[#ea3a54]  text-white rounded-md text-base flex items-center justify-center mt-4 h-12"> 
                        Uygunluk durumunu kontrol edin
                    </div>
                </div>            
            </div> 
            <div class="flex items-center justify-center text-[#717171] gap-4 p-6 ml-10 text-center ">
                    <div>
                        <svg viewBox="0 0 32 32"  aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path></svg>
                    </div>
                    <div class="underline text-sm">   
                        Bu kaydı bildir
                    </div>
            </div>
            </div>  
        </div>
    </div>
</template>

