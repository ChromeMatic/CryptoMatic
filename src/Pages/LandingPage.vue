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
      ],
      LImgs:[
        {img:'153-bar-chart-growth-flat.gif', news:"Get accurate data of the latest treads of crypto."},
        {img:'newspaper.png', news:"Get the latest news about cryptocurrency."},
        {img:'298-coins-flat.gif', news:"Watch your favorite cryptocurrency."},
        {img:'bitcoin-wallet.png', news:'Keep upto date with the crypto world.'}
      ]
    }),
    computed:mapGetters(["getTheme"]),
 }
</script>

<template>
  <div :class="getTheme ? 'dark' : ''" class="font-Rajdhani">
    <div class="dark:bg-dashC dark:text-white">

      <navBar/>  

      <div class="flex lg:flex-row flex-col  lg:px-8  px-4 lg:py-8 py-4 lg:space-x-8 lg:space-y-0 space-y-4 justify-center items-center">

          <div class="py-4 px-1 space-y-3 flex flex-col justify-center items-center">
            <h1 class="lg:text-6xl text-5xl uppercase font-medium text-center">
                Welcome to CryptoMatic
            </h1>
            <h2 class="lg:text-2xl text-xl text-center">
              Where you can track your favorite cryptocurrencies, for you
            </h2>
            <div class="py-4 px-2">
              <a href="/track" class="bg-btn uppercase text-white font-semibold text-xl px-16 py-2 rounded-md
                              transition-all hover:bg-green-500 dark:hover:bg-yellow dark:hover:text-green-500 hover:shadow-xl">
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

      <div class="py-8 px-1 space-y-4 flex justify-center items-center">

        <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          <div v-for="img in LImgs" :key="img.img" class="h-56 w-72 p-4 rounded flex flex-col space-y-4 justify-center items-center bg-gray-100 dark:bg-x">
             <img :src="'/' + img.img" class="h-32 w-32" alt="">
             <p class="text-center text-xl font-semibold uppercase">
               {{img.news}}
             </p>
          </div>
        </div>  

      </div>

      <FooterSection/>

    </div>
  </div>
</template>
