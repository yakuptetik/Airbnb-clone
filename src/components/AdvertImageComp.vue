<script setup>

defineProps({
    image: String,
})
</script>

<template>
    <div class="border first:col-span-2 first:row-span-2 overflow-hidden">
        <img class="w-full h-full object-fill " :src="image" alt="">
    </div>
</template>
