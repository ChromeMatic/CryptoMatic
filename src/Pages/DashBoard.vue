<script>
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import FooterSection from "../components/FooterSection.vue"
import { mapGetters, mapActions } from "vuex";
export default {
  name:'DashBoard',
  components:{SearchBar,NavBar,FooterSection},
  data:() => ({}),
  created(){
   this.FetchCrypto();
  },
  computed:mapGetters(["getTheme","getCrypto"]),
  methods:mapActions(["FetchCrypto"])
}
</script>

<template>
<div :class="getTheme ? 'dark' : ''">
  <div class="font-Rajdhani flex flex-col dark:bg-dashC ">

      <NavBar/>
    
      <div class="flex flex-col w-full space-y-2 p-2">
        
        <SearchBar/>

        <div class="rounded dark:bg-x bg-gray-50 w-full flex lg:flex-row flex-col justify-center items-center lg:space-x-8 p-2 font-semibold text-gray-700 dark:text-white">
           <div v-for="crypto in getCrypto" :key="crypto['id']" class="flex flex-col space-y-2 justify-center items-center"> 
             {{crypto['name']}}
             <img :src="crypto['image']" class="h-8 w-8" alt="">
             <p>${{crypto['current_price']}}</p>
           </div>
        </div>

      </div>

      <FooterSection/>

    </div>
</div>
</template>
