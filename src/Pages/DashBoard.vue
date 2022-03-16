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
    
      <div class="flex flex-col w-full space-y-2 px-4 py-4">
        
        <SearchBar/>

        <div class="rounded w-full grid gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 justify-center items-center p-2 font-semibold text-gray-500 dark:text-white">
           <div v-for="crypto in getCrypto" :key="crypto['id']" class="flex flex-col space-y-2 justify-center items-center bg-pr1 dark:bg-gray-900 rounded-md"> 
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
