
<script setup>
import { ref, watch, onMounted } from 'vue'
import TabComponent  from '../components/TabComponent.vue'
import HomeGrid from '../components/HomeGrid.vue';
import Navbar from '../components/Navbar.vue';
import { useIlanlarStore } from '../store/ilanlar'


const search = ref('');

const ilanlarStore = useIlanlarStore();

const tabs = ref([
  {
    title:'Güzel manzaralar', id: 0, image: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" , to: '/arda',
  },
  {
    title:'Olağanüstü', id: 1, image: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" , to: '/arda1'
  },
  {
    title:'Küçük evler', id: 2, image: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg", to: '/arda2'
  },
  {
    title:'Milli parklar', id: 3, image: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg", to: '/arda3'
  },
  {
    title:'Dünyanın zirvesi', id: 4, image: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg", to: '/arda4'
  },
  {
    title:'Özel odalar', id: 5, image: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg", to: '/arda5'
  },
  {
    title:'Şatolar', id: 6, image: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg", to: '/arda6'
  },
  {
    title:'Popüler', id: 7, image: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg", to: 'arda7'
  },
  {
    title:'Ağaç evler', id: 8, image: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg", to: 'arda8'
  },
  {
    title:'Yurt çadırları', id: 9, image: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg", to: 'arda9'
  },
  {
    title:'Kamp', id: 10, image: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg", to: 'arda10'
  },
  {
    title:'Üçgen evler', id: 11, image: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg", to: 'arda11'
  },
  {
    title:'Küçük evler', id: 12, image: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg", to: '/arda2'
  },
  {
    title:'Milli parklar', id: 13, image: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg", to: '/arda3'
  },
  {
    title:'Dünyanın zirvesi', id: 14, image: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg", to: '/arda4'
  },
  

  
])
</script>

<template>
  <div class="bg-white w-full">
      <div class="px-[80px] bg-white z-30 md:px-[70px] fixed w-full top-0 sm:px-[40px] min-[440px]:px-5 max-[440px]:px-5">
        <Navbar v-model="search"/>
        <TabComponent :tabs="tabs"/>
      </div>
      <hr>
      <div class="px-[80px] top-44 md:px-[70px] relative lg:px-[80px]  sm:px-10  min-[440px]:px-10 max-[440px]:px-10">
          <HomeGrid :ilanlar="ilanlarStore.filteredIlans(search)"/>
      </div>
      <div class="fixed max-[768px]:hidden bottom-20 w-full left-1 right-[50%] h-12  px-6 flex items-center justify-center text-sm ">
        <div class="text-white w-[170px] bg-black flex rounded-full items-center justify-center px-6 gap-2 py-4 ">
          <div class="w-full">
              Haritayı göster
          </div>
          <div>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display:block;height:16px;width:16px;fill:#FFFFFF" aria-hidden="true" role="presentation" focusable="false"><path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path></svg>
          </div>
        </div>
      </div>
      <div class="text-sm w-full fixed bottom-0 h-[47px]  max-[768px]:h-[67px] max-[768px]:py-4 bg-white border-t md:px-[60px]  sm:px-[40px] py-3">      
        <!-- footer -->
          <div class="max-[768px]:hidden flex item-center justify-between w-full">
            <div class="flex items-center justify-center gap-2 max-[768px]:hidden">
              <div >
                © 2022 Airbnb, Inc.
              </div>
              ·
              <div class="hover:underline">
                Şartlar
              </div>
              ·
              <div class="hover:underline">
                Gizlilik
              </div>
              ·
              <div class="hover:underline">
                Site haritası
              </div>
            </div>
            <div class="flex items-center justify-center gap-1 max-[768px]:hidden">
              <div>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
              </div>
              <div class="hover:underline">
                Türkçe (TR)
              </div> 
              <div class="hover:underline">
                ₺ TRY
              </div>
              
              <div class="hover:underline">
                Destek ve kaynaklar
              </div>
              <div>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></g></svg>
              </div>
            </div>
          </div>

                <!-- footer resonsive -->
          <div class="min-[768px]:hidden  flex item-center justify-around px-4">
            <div class="opacity-50 hover:opacity-100 cursor-pointer  hover:text-red-500">
              <div class="flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 24px; width: 24px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
              </div>
              <div class="text-black text-[10px]">
                Keşfedin
              </div>
            </div>
            <div class="opacity-50 hover:opacity-100 cursor-pointer  hover:text-red-500">
              <div class="flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 24px; width: 24px; stroke: currentcolor; stroke-width: 2.66667; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
              </div>
              <div class="text-black text-[10px]">
                Favoriler
              </div>
            </div>
            <div class="opacity-50 hover:opacity-100 cursor-pointer  hover:text-red-500">
              <div class="flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
              </div>
            <div class="text-black text-[10px]">
              Seyahatler
              </div>
            </div>
            <div class="opacity-50 hover:opacity-100 cursor-pointer  hover:text-red-500">
              <div class="flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m26 2c2.6887547 0 4.8818181 2.12230671 4.9953805 4.78311038l.0046195.21688962v14c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-5.845l-4.1548949 5.0792674-4.1561051-5.0792674h-5.844c-2.61406707 0-4.75959878-2.0060384-4.98113724-4.5626572l-.01424325-.2204532-.00461951-.2168896v-14c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm0 2h-20c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v14c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h6.7918643l3.2071357 3.92 3.2080542-3.92h6.7929458c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-14c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731z"></path></svg>
              </div>
            <div class="text-black text-[10px]">
              Gelen
              </div>    
            </div>
            <div class="opacity-50 hover:opacity-100 cursor-pointer  hover:text-red-500">
              <div class="flex items-center justify-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path></svg>
              </div>
              <div class="text-black text-[10px]">
              Profil
              </div> 
            </div>
          </div>
      </div>

  </div>
</template>










