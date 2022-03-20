<script>
import SearchBar from "../components/SearchBar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name:'DashBoard',
  components:{SearchBar},
  data:() => ({
    timer:""
  }),
  created(){
   this.FetchCrypto();
   this.timer = setInterval(this.FetchCrypto, 30000);
  },
  computed:{
    ...mapGetters(["getTheme","getCrypto"]),
  },
  methods:{
    ...mapActions(["FetchCrypto","GetCryptoByID"]),
    ClearTimer(){
      clearInterval(this.timer);
    },
    getID(ID){
      this.GetCryptoByID(ID);
      this.$router.push('/Info')
    }
  },
  beforeDestroy() {
    this.ClearTimer();
  },
}
</script>

<template>
<div :class="getTheme ? 'dark' : ''">
  <div class="font-Rajdhani flex flex-col dark:bg-dashC ">
    
      <div class="flex flex-col w-full space-y-2 px-8 py-4">
        
        <SearchBar/>
        
       

        <div class="rounded w-full grid gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 justify-center items-center xl:p-2 font-semibold text-gray-500 dark:text-white">
           <div v-for="crypto in getCrypto" :key="crypto['id']" class="flex flex-col space-y-2 justify-center items-center lg:p-8 p-4 bg-pr1 dark:bg-gray-900 rounded-md"> 
             <h1 class="xl:text-2xl text-xl text-center"> {{crypto['name']}}</h1> 
             <div class="rounded bg-white dark:bg-gray-700 p-4">
               <img :src="crypto['image']" class="h-16 w-16" alt="">
             </div>
             <p class="xl:text-2xl text-xl text-center">${{crypto['current_price']}} USD</p>
              <button @click="getID(crypto['id'])" class="xl:text-2xl text-sm py-2 px-6 bg-white dark:bg-gray-700 rounded font-bold uppercase transition-all hover:text-green-500 dark:hover:text-yellow">
                Learn More
              </button>
           </div>
        </div>

      </div>

    </div>
</div>
</template>
