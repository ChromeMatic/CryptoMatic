<script>
import NavBar from "../components/NavBar.vue";
import FooterSection from "../components/FooterSection.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    name:'Chart.vue',
    data: () => ({}),
    components:{
        NavBar,FooterSection
    },
    created(){
        let id  = this.getCryptoByID;
        this.timer =setInterval(this.getChartData(id),120000)
    },
    computed:{
        ...mapGetters(["getTheme","getCryptoByID","getCryptoChartInfo"]),
    },
    methods:{
        ...mapActions(["getChartData"])
    },
    beforeDestroy() {
        this.ClearTimer();
    },
 }
</script>

<template>
  <div :class="getTheme ? 'dark' : ''">
      <NavBar/>
        
      <div class="dark:text-white dark:bg-dashC p-4 font-Rajdhani">
        <div class="px-12 py-6 xl:space-x-8 space-x-0 xl:space-y-0 space-y-4 flex xl:flex-row flex-col justify-center items-center">
            
            <img :src="getCryptoChartInfo['image']['large']" alt=""> 
             
            <div class="flex flex-col space-y-4">
                 <p class=" uppercase font-semibold">Starting Date: {{getCryptoChartInfo['genesis_date']}} </p>
                 <p class=" uppercase font-semibold">Market Rank: {{getCryptoChartInfo['market_cap_rank']}}</p>
                <div>
                    {{getCryptoChartInfo['description']['en']}}
                </div>
            </div>
           
        </div>
        
        <div class="flex justify-center items-center">
            <a class="px-16 py-2 bg-pr1 dark:bg-gray-700 uppercase rounded" :href="getCryptoChartInfo['links']['homepage'][0]" target="_blank" rel="noopener noreferrer"> Learn More</a>
        </div>
      </div>


      <FooterSection/>
  </div>
</template>