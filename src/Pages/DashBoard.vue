<script>
import SideNavVue from "../components/SideNav.vue";
import SearchBar from "../components/SearchBar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name:'DashBoard',
  components:{SideNavVue,SearchBar},
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
  <div class="font-Rajdhani flex dark:bg-dashC ">

      <SideNavVue/>

      <div class="flex flex-col w-full space-y-2 p-2">
        
        <SearchBar/>

        <div class="rounded dark:bg-x bg-gray-50 w-full flex justify-center items-center space-x-8 p-2 font-semibold text-gray-700 dark:text-white">
           <div v-for="crypto in getCrypto" :key="crypto['id']" class="flex flex-col space-y-2 justify-center items-center"> 
             {{crypto['name']}}
             <img :src="crypto['image']" class="h-8 w-8" alt="">
             <p>${{crypto['current_price']}}</p>
           </div>
        </div>

      </div>

    </div>
</div>
</template>
