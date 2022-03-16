<script>
import { mapGetters } from "vuex";
export default {
   name:"SearchBar",
   data:() =>({
       searchWord:""
   }),
   computed:mapGetters(["getTheme"]),
   methods:{
       findCoin(){

       }
   }
} 
</script>

<template>
 <div :class="getTheme ? 'dark' : ''" >
    <div class="bg-gray-50 dark:bg-x flex lg:py-6 lg:px-4">

        <div class="bg-white dark:bg-gray-700 rounded py-2 px-2 flex flex-1 justify-center items-center space-x-4">

           <div class="flex space-x-1 justify-center items-center">
                <h1 class="text-gray-600 dark:text-white uppercase text-2xl font-semibold">
                    search
                </h1>
           </div>

           <div>
              <input type="text" v-model="searchWord" class="bg-gray-50 border text-gray-900 text-xl font-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-96 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bitcoin" required>
           </div>

           <button @click="findCoin" class="py-1 px-2 rounded bg-green-500 dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white transition dark:hover:text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
           </button>   
        
        </div>

    </div>
 </div>
</template>