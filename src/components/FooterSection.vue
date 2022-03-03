<script>
    export default {
        name:'FooterSection',
        data:()=>({})
    }
</script>

<template>
    <div class="w-full lg:px-8 py-2 px-4 bg-gray-100 dark:bg-gray-800 font-Rajdhani uppercase">

        <div class="bg-white dark:bg-gray-900 dark:text-white rounded flex flex-col justify-center items-center py-4 space-y-4">

            <img src="/cryptocurrency.png" class="h-16 w-16" alt="">

            <h1 class="text-2xl font-semibold">CryptoMatic</h1>

            <div class="flex space-x-2">
               <div v-for="i in 4" :key="i" class="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div>
               <p class="font-medium">all rights are reserve to CryptoMatic 2022.</p>
            </div>
        </div>

    </div>
</template>