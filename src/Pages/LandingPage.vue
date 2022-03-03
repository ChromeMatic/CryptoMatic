<script>
 import navBar from "../components/NavBar.vue"
 import FooterSection from "../components/FooterSection.vue"
 import { mapGetters } from "vuex";
 export default {
    name:"LandingPage",
    components:{navBar,FooterSection},
    data:() => ({
      Imgs:[
        {
          name:'Bitcoin',
          path:"bitcoin.png"
        },
        {
          name:'Ethereum',
          path:'eth.png',
        },
        {
          name:'DogeCoin',
          path:'dogecoin.png'
        }
      ]
    }),
    computed:mapGetters(["getTheme"]),
    methods:{},
 }
</script>

<template>
  <div :class="getTheme ? 'dark' : ''" class="font-Rajdhani">

    <navBar/>  

    <div class="flex lg:flex-row flex-col dark:bg-gray-800 dark:text-white lg:px-8 lg:py-8 px-4 py-4 lg:space-x-8 lg:space-y-0 space-y-4 justify-center items-center">

        <div class="py-4 px-1 space-y-3 flex flex-col justify-center items-center">
          <h1 class="lg:text-6xl text-4xl uppercase font-medium text-center">
              Welcome to CryptoMatic
          </h1>
          <h2 class="lg:text-2xl text-xl text-center">
            Where you can track your favorite cryptocurrencies, for you
          </h2>
          <div class="py-4 px-2">
            <a href="/login" class="bg-indigo-500 uppercase text-white font-semibold text-xl px-16 py-2 rounded-md
                            transition-all hover:bg-green-500 hover:shadow-xl">
                Get Started!
            </a>
          </div>
        </div>

        <div class="py-4 px-1 space-y-4 flex flex-col ">
          
           <div class="flex space-x-2 justify-center items-center">

             <div v-for="img in Imgs" :key="img.name">

                <img :src="'/'+ img.path" class="lg:h-32 lg:w-32 h-20 w-20"  :alt="img.name">

             </div> 

           </div>

           <h1 class="text-center font-medium text-xl">Add your cryptocurrencies to your watchlist.</h1>

        </div>

    </div>

    <FooterSection/>
    
  </div>
</template>
