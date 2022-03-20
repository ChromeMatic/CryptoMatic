<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'CryptoInfo',
  data: () => ({
    timer:""
  }),
  computed:{
      ...mapGetters(["getTheme","getCryptoByID","getCryptoChartInfo"]),
  },
  created(){
   let ID = this.getCryptoByID;
   if(ID){
      this.timer = setInterval(this.getChartData(ID), 6000);
   }else{
     if(localStorage.item){
      this.timer = setInterval(this.getChartData(localStorage.item),6000);
     }
     this.timer = setInterval(this.getChartData('bitcoin'),6000);
   }
   
  },
  methods: {
      ...mapActions(["getChartData"]),
      ClearTimer(){
        clearInterval(this.timer)
      }
  },
  beforeDestroy() {
    this.ClearTimer();
  }
}
</script>


<template>
  <div :class="getTheme ? 'dark' : ''">
    <div class="dark:bg-dashC w-full flex flex-col justify-center items-center px-8 py-4 space-y-2">
        
        <div class="flex xl:flex-row flex-col justify-center items-center xl:space-x-4 xl:space-y-0 space-y-3 xl:p-6 p-4">
          <h1 class="xl:text-5xl text-3xl font-Rajdhani uppercase  text-gray-700 dark:text-white">
            Cryptocurrency Info On
          </h1>
          <p class="text-5xl font-Rajdhani font-semibold uppercase text-gray-700 dark:text-white">
            {{getCryptoByID}}
          </p>
        </div>

        <div class="dark:bg-gray-900 p-3 rounded">
          <img :src="getCryptoChartInfo['image']['large']" class="h-44 w-44" alt="">
        </div>

        <div class="rounded w-full grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded dark:text-white uppercase font-semibold">
            Date start : {{getCryptoChartInfo['genesis_date']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded  dark:text-white uppercase font-semibold">
            Symbol: {{getCryptoChartInfo['symbol']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded  dark:text-white uppercase font-semibold">
            Name: {{getCryptoChartInfo['name']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded  dark:text-white uppercase font-semibold">
            Current Price in USD: $ {{getCryptoChartInfo['market_data']['current_price']['usd']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded  dark:text-white uppercase font-semibold">
            Current Price in CAD: CA$ {{getCryptoChartInfo['market_data']['current_price']['cad']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8 rounded  dark:text-white uppercase font-semibold">
            Current Price in EUR: € {{getCryptoChartInfo['market_data']['current_price']['eur']}}
          </p>

          <p class="text-gray-700 dark:bg-gray-900 bg-pr1 text-center px-8 py-8  dark:text-white uppercase font-semibold">
            Current Price in GBP: £ {{getCryptoChartInfo['market_data']['current_price']['gbp']}}
          </p>
        </div>

         <div class="xl:py-8 xl:px-8 py-4">

           <a class="bg-gray-100 hover:bg-green-400 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-900 transition-all dark:text-yellow text-gray-700 rounded xl:px-32 px-8 py-4 uppercase font-semibold" :href="getCryptoChartInfo['links']['homepage'][0]" target="_blank" rel="noopener noreferrer"> 
             Visit Website
           </a>

         </div>

    </div>
  </div>
</template>
