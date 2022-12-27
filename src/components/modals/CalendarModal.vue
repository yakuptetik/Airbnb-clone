<template>
        <div class="flex z-50 justify-center items-center fixed top-0 bottom-0 right-0 left-0" @click="$emit('close-modal')">
      <div class="bg-white h-[305px] w-[568px] rounded-xl" @click.stop>
        sdwefrgetrgf
        <div >
        <Datepicker
        :date-format="{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
        }"
        circle
         range
         :v-model="selectedDate"
         placeholder="DD.MM.YYYY"
         show-clear-button
         position="right"
                 />
    </div>
    
       </div>
    </div>

  </template>
  
  <script >
    import 'vue-datepicker-ui/lib/vuedatepickerui.css';
    import VueDatepickerUi from 'vue-datepicker-ui';
  
    export default {
      components: {
        Datepicker: VueDatepickerUi
      },
      data () {
    return {
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000)]
      
    }
  }
    }
  </script>
  
  