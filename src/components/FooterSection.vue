<script>
import { mapGetters} from "vuex";
    export default {
        name:'FooterSection',
        data:()=>({
            Links:[
                {img:"https://cdn-icons-png.flaticon.com/512/174/174855.png" , ref:"https://www.instagram.com/armanibrwn/"},
                {img:"/twitter.png", ref:"https://twitter.com/ArmaniB42195047"},
                {img:"/linkedin.png", ref:"https://www.linkedin.com/in/armani-brown-14725616b/"},
                {img:"https://cdn-icons-png.flaticon.com/512/25/25657.png", ref:"https://github.com/ChromeMatic"},
                {img:"/web-design.png", ref:"https://armani-tech.netlify.app/"}
            ]
        }),
        computed:mapGetters(["getTheme"]),
    }
</script>

<template>
 <div :class="getTheme ? 'dark' : ''">
    <div class="w-full lg:px-8 py-2 px-4 bg-pr1 dark:bg-dashC font-Rajdhani uppercase">
        <div class="bg-white dark:bg-x dark:text-white rounded flex flex-col justify-center items-center py-4 space-y-4">

                <img src="/cryptocurrency.png" class="h-16 w-16" alt="">

                <h1 class="text-2xl font-semibold">CryptoMatic</h1>

                <div class="flex space-x-4">
                <a v-for="link in Links" :key="link.img" :href="link.ref" target="_blank" class="rounded">
                    <img :src="link.img" class="h-8 w-8" alt="">
                </a>
                </div>

                <div>
                <p class="font-medium">all rights are reserve to CryptoMatic 2022.</p>
                </div>
        </div>
    </div>
 </div>   
</template>