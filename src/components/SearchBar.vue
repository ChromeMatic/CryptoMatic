<script>
import { checkCompatEnabled } from "@vue/compiler-core";
import { mapGetters, mapActions } from "vuex";
export default {
   name:"SearchBar",
   data:() =>({
       searchWord:"",
       display:false,
   }),
   computed:{
     ...mapGetters(["getTheme","getCryptoSearchData"]),
   },
   methods:{
       ...mapActions(["getSearchData","GetCryptoByID"]),
       findCoin(){
           let coinName =  this.searchWord;
           if(coinName){
               this.getSearchData(coinName)
               this.display = true;
           }else{
               //trigger modal!
           }
       },
       getID(ID){
            this.GetCryptoByID(ID);
            this.$router.push('/Info')
       }
   }
} 
</script>

<template>
 <div :class="getTheme ? 'dark' : ''" >

    <div class="bg-pr1 dark:bg-x flex lg:py-2 lg:px-8 rounded-md">

        <div class="py-2 px-2 flex flex-1 justify-center items-center space-x-4">

           <div class="flex space-x-1 justify-center items-center">
                <h1 class="text-gray-600 dark:text-white uppercase text-2xl font-semibold">
                    search
                </h1>
           </div>

           <div>
              <input type="text" v-model="searchWord" class="bg-white border text-gray-900 text-xl font-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-96 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bitcoin" required>
           </div>

           <button @click="findCoin" class="py-1 px-2 rounded bg-green-500 dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white transition dark:hover:text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
           </button>   
        
        </div>

    </div>


    <div class=" mt-4" >
       <div v-show="display"  class="lg:py-4  py-8 lg:px-8 flex flex-col bg-pr1 dark:bg-gray-900 dark:text-white justify-center items-center space-y-2 text-xl font-semibold text-gray-500 uppercase">      
               
               <p>Name: {{getCryptoSearchData['name']}}</p>
               <img :src="getCryptoSearchData['large']" class="h-16 w-16" alt="">
               <p>Market Cap rank : {{getCryptoSearchData['market_cap_rank']}}</p>
               <button class="mt-1 uppercase font-semibold bg-white rounded py-2 px-8 hover:bg-green-400 hover:text-white transition-all dark:bg-gray-700 dark:hover:text-yellow" @click="getID(getCryptoSearchData['id'])">
                   Learn More
               </button>
        </div>
       
    </div>
   
    
 </div>
</template>