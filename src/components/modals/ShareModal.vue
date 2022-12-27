<script>  
import KatıstırModal from './KatıstırModal.vue';
export default {
  components: {  KatıstırModal },
  data() {
    return {
        sharelink: false,
    }
  },
}
</script>
<template>
    <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')">
      <div class="bg-white p-6 h-[600px] w-[570px] rounded-xl" @click.stop>
        <div class=" relative ">
          <div class="cursor-pointer absolute " @click="$emit('close-modal')">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
           </div>
        </div>
        <div class="text-[26px] pt-10 pb-6 w-full">
           Bu yeri arkadaşlarınızla ve ailenizle paylaşın
        </div>
        <div class="flex items-center gap-4 cursor-pointer">
            <div class="">
              <img class="h-[64px] rounded-lg w-[64px]" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720" alt="">
            </div>
            <div class="text-base ">
                deneme
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-6">
             <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                  <div class="mx-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; fill: currentcolor;"><path d="M25 5a4 4 0 0 1 4 4v17a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h13zm0 2H12a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-3-6v2H11a6 6 0 0 0-5.996 5.775L5 9v13H3V9a8 8 0 0 1 7.75-7.996L11 1h11z"></path></svg>
                  </div>
                 <div>
                    Bağlantı kopyala
                 </div>
             </div>
            <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                  <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 32px; width: 32px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><g fill="none"><rect height="24" rx="4" width="28" x="2" y="4"></rect><path d="m3 6 10.416231 8.813734c1.4913834 1.2619398 3.6761546 1.2619398 5.167538 0l10.416231-8.813734"></path></g></svg>
                   </div>  
                  <div>
                      E-posta
                   </div>
            </div>
                 <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                    <a class="flex items-center justify-start" target="_blank" href="https://web.whatsapp.com/">
                  <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; border-radius: 5px;"><defs><linearGradient x1="50.794%" y1="93.362%" x2="50.794%" y2="12.41%" id="imessagegradient"><stop stop-color="#0CBD2A" offset="0%"></stop><stop stop-color="#5BF675" offset="100%"></stop></linearGradient></defs><g><path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="url(#imessagegradient)"></path><path d="M15.796 5.469c-6.404 0-11.595 4.324-11.595 9.658.005 3.39 2.143 6.528 5.633 8.27-.457 1.023-1.142 1.983-2.028 2.838 1.717-.3 3.329-.934 4.71-1.85 1.064.264 2.17.399 3.28.4 6.404 0 11.596-4.324 11.596-9.658S22.2 5.47 15.796 5.47z" fill="#FFF"></path></g></svg>
                   </div>  
                  <div>
                    Mesajlar
                   </div>
                </a>
                 </div>
                 <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                    <a class="flex items-center justify-start" target="_blank" href="https://web.whatsapp.com/">
                  <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; border-radius: 5px;"><path d="m32 0v32h-32v-32z" fill="#25d366"></path><path d="m4 28 1.695-6.163a11.824 11.824 0 0 1 -1.595-5.946c.003-6.556 5.364-11.891 11.95-11.891a11.903 11.903 0 0 1 8.453 3.488 11.794 11.794 0 0 1 3.497 8.414c-.003 6.557-5.363 11.892-11.95 11.892-2 0-3.97-.5-5.715-1.448zm6.628-3.807c1.684.995 3.292 1.591 5.418 1.592 5.474 0 9.933-4.434 9.936-9.885.002-5.462-4.436-9.89-9.928-9.892-5.478 0-9.934 4.434-9.936 9.884 0 2.225.654 3.891 1.754 5.634l-1.002 3.648 3.76-.98h-.002zm11.364-5.518c-.074-.123-.272-.196-.57-.344-.296-.148-1.754-.863-2.027-.96-.271-.1-.469-.149-.667.147-.198.295-.767.96-.94 1.157s-.346.222-.643.074c-.296-.148-1.253-.46-2.386-1.466-.881-.783-1.477-1.75-1.65-2.045s-.018-.455.13-.602c.134-.133.296-.345.445-.518.15-.17.2-.294.3-.492.098-.197.05-.37-.025-.518-.075-.147-.668-1.6-.915-2.19-.241-.577-.486-.499-.668-.508l-.569-.01a1.09 1.09 0 0 0 -.79.37c-.272.296-1.039 1.01-1.039 2.463s1.064 2.857 1.211 3.054c.15.197 2.092 3.18 5.068 4.458.708.304 1.26.486 1.69.622.712.224 1.359.193 1.87.117.57-.084 1.755-.714 2.002-1.404.248-.69.248-1.28.173-1.405z" fill="#FFF"></path></svg>
                   </div>  
                  <div>
                        WhatsApp
                   </div>
                </a>
                 </div>
                 <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                    <a class="flex items-center justify-start" target="_blank" href="https://web.whatsapp.com/">
                  <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px;"><defs><radialGradient cx="19.25%" cy="99.447%" fx="19.25%" fy="99.447%" r="108.96%" gradientTransform="scale(1 .99991)" id="fbmessengera"><stop stop-color="#09F" offset="0%"></stop><stop stop-color="#A033FF" offset="60.98%"></stop><stop stop-color="#FF5280" offset="93.48%"></stop><stop stop-color="#FF7061" offset="100%"></stop></radialGradient></defs><path fill="#FFF" d="M32 0v32H0V0z"></path><path d="M16 4C9.241 4 4 8.953 4 15.64c0 3.498 1.434 6.522 3.768 8.61.195.174.315.42.321.684l.066 2.136a.96.96 0 0 0 1.347.849l2.382-1.05a.964.964 0 0 1 .642-.048c1.095.3 2.259.462 3.474.462 6.759 0 12-4.953 12-11.64S22.759 4 16 4z" fill="url(#fbmessengera)"></path><path d="M8.794 19.045l3.525-5.592a1.8 1.8 0 0 1 2.604-.48l2.805 2.103a.72.72 0 0 0 .867-.003l3.786-2.874c.504-.384 1.164.222.828.759l-3.528 5.589a1.8 1.8 0 0 1-2.604.48l-2.805-2.103a.72.72 0 0 0-.867.003l-3.786 2.874c-.504.384-1.164-.219-.825-.756z" fill="#FFF"></path></svg>
                   </div>  
                  <div>
                        Messenger
                   </div>
                </a>
                 </div>
                 <div class="border flex items-center justify-start rounded-xl py-5 text-base">
                    <a class="flex items-center justify-start" target="_blank" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.airbnb.com.tr%252Frooms%252F610511843622686196%253Fcheck_in%253D2023-04-16%2526check_out%253D2023-04-22%2526guests%253D1%2526adults%253D1%2526s%253D4%2526unique_share_id%253D84562a45-f5af-4681-a656-2ccddf927890%26quote%3DAirbnb%2527deki%2Bbu%2Beve%2Bbir%2Bg%25C3%25B6z%2Bat%25C4%25B1n.&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=tr_TR">
                  <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; border-radius: 5px;"><path fill="#1877F2" d="M32 0v32H0V0z"></path><path d="M22.938 16H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.436v4.625H13.5V32h5V20.625h3.727l.71-4.625z" fill="#FFF"></path></svg>
                   </div>  
                  <div>
                        Facebook
                   </div>
                </a>
                 </div>
                 <div class="border  rounded-xl py-5 text-base">
                    <a class="flex items-center justify-start" target="_blank" href="https://twitter.com/intent/tweet?source=tweetbutton&text=Airbnb%27deki+bu+eve+bir+g%C3%B6z+at%C4%B1n.&url=https%3A%2F%2Fwww.airbnb.com.tr%2Frooms%2F610511843622686196%3Fcheck_in%3D2023-04-16%26check_out%3D2023-04-22%26guests%3D1%26adults%3D1%26s%3D5%26unique_share_id%3Df4caefe6-2a9a-434f-aabb-0a1ce71a1f92&related=airbnb">
                        <div class="mx-6">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; border-radius: 5px;"><path fill="#1DA1F2" d="M0 0H32V32H0z"></path><path d="M18.664 7.985a4.5 4.5 0 0 0-2.289 4.89c-3.5-.188-6.875-1.813-9.063-4.625a4.25 4.25 0 0 0 1.375 5.875c-.687 0-1.374-.125-2-.438.063 2.063 1.5 3.876 3.5 4.313-.624.188-1.312.188-2 .063.626 1.812 2.313 3.062 4.188 3.125-1.813 1.5-4.25 2.187-6.563 1.812a12.438 12.438 0 0 0 19.313-11.188c.875-.624 1.625-1.374 2.188-2.312-.75.375-1.625.625-2.5.75.937-.563 1.625-1.438 2-2.5-.875.5-1.813.875-2.813 1.063a4.5 4.5 0 0 0-5.336-.828z" fill="#FFF"></path></svg>
                   </div>  
                  <div>
                        Twitter
                   </div>
                    </a>
                  
                 </div>
                 <div @click="sharelink = true" class="border flex items-center justify-start rounded-xl py-5 text-base">
                    <div class="mx-6">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px; fill: currentcolor;"><path d="M18.346 4.19l1.923.55-6.615 23.07-1.923-.55zm4.215 1.956l8.293 8.293.116.128a2 2 0 0 1-.116 2.7l-8.293 8.294-1.415-1.415 8.293-8.292-8.293-8.293zm-13.122 0l1.415 1.415-8.293 8.293 8.293 8.292-1.415 1.415-8.293-8.293a2 2 0 0 1-.116-2.701l.116-.128L9.44 6.146z"></path></svg>
                    </div>  
                    <div>
                            Katıştır
                    </div>
                 </div>
                 
                </div> 
                <KatıstırModal v-show="sharelink" @close-modal="sharelink = false"/>
    </div>
  
       </div>

  </template>