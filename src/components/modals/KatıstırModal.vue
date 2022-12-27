<script setup>
function copy() {
  let textarea = document.getElementById("textarea");
  textarea.select();
  document.execCommand("copy");
}
</script>
<template>
    <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')">
      <div class="bg-white p-6 h-[610px] w-[1000px] rounded-xl" @click.stop>
        <div class=" relative ">
          <div class="cursor-pointer absolute " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
           </div>
        </div>
<div class="flex justify-between mt-10 ">
    <div class="w-1/2">
        <div class="text-2xl font-bold pb-8">
            Bu konaklamayı ekleyin
        </div>
        <div class="text-base font-semibold pb-3">
            Kodunuzu özelleştirin:
        </div>
        <div class="flex gap-3">
            <div>
                <input class="bg-black h-6 w-6" type="checkbox">
            </div>
            <div class="text-sm">
                Değerlendirmeleri gizle
            </div>
        </div>
        <div class="flex gap-3">
            <div>
                <input class="bg-black h-6 w-6" type="checkbox">
            </div>
            <div class="text-sm">
                "Takip edilmeyen" bağlantılar oluştur
            </div>
        </div>
        <div class="text-base font-semibold mt-10 pb-6">
            Aşağıdaki HTML'yi kopyalayıp web sitenizin koduna yapıştırın:
        </div>
        <textarea class=" text-gray-500 font-light w-full border border-gray-500 p-2 rounded-lg" id="textarea"><div class="airbnb-embed-frame" data-id="610511843622686196" data-view="home" style="width:450px; height:300px; margin:auto"><a href="https://www.airbnb.com.tr/rooms/610511843622686196?check_in=2023-04-16&amp;check_out=2023-04-22&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">Airbnb&#x27;de Görüntüle</a><a href="https://www.airbnb.com.tr/rooms/610511843622686196?check_in=2023-04-16&amp;check_out=2023-04-22&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">2 kişi için güzel &#x27;Nid Passion kulübesi</a><script async="" src="https://www.airbnb.com.tr/embeddable/airbnb_jssdk"></script></div>
        </textarea>
        <div>
            <button class="bg-black text-white text-base p-3 rounded-lg mt-3"  @click="copy">HTML'yi Kopyala</button>
        </div>
        <div class="cursor-pointer underline absolute bottom-32 ml-4 text-base" @click="$emit('close-modal')">
            Geri dön
        </div>

     </div>
    <div class="w-1/2">
      <div class="relative">
        <div class="absolute text-white text-xs top-5 left-12">
            ÖN İZLEME
        </div>
        <div class="pl-8">
             <img src="https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=720" alt="">
        </div>
       
      </div>
    </div> 
</div>
       
           
      </div>
     
       </div>

  </template>