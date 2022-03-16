<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:'NavBar',
    data: () => ({
      Navigation:[
        {name:'crypto news',link:'/track'},
        {name:'cryptocurrencies', link:'/track'},
      ],
      show:false,
    }),
    computed:mapGetters(["getTheme"]),
    methods:mapActions(["changeTheme"]),
}
</script>

<template>
    <div :class="getTheme ? 'dark' : ''" class="sticky top-0 z-50">
      <div class="w-full  lg:px-8 py-2 px-4 bg-pr1 dark:bg-dashC font-Rajdhani uppercase">

          <!-- Primary nav -->
          <div class="hidden md:flex justify-between items-center rounded-lg h-16 w-full bg-white dark:bg-x">

              <div class="flex justify-center items-center space-x-4 text-gray-700 dark:text-white px-8 font-semibold text-xl">

                  <a href="/" class="flex justify-center items-center space-x-1 transition hover:text-green-500 dark:hover:text-yellow">
                    <img src="/cryptocurrency.png" class="h-8 w-8" alt="">  
                    <h1>home</h1>
                  </a>

                  <a v-for="nav in Navigation" :key="nav.name" class="transition hover:text-green-500 dark:hover:text-yellow" :href="nav.link">{{nav.name}}</a>

              </div>

              <div class="flex justify-center items-center space-x-2 text-gray-700 dark:text-white px-8 font-semibold text-xl">
                  
                  <button @click="changeTheme" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md flex justify-center items-center
                          transition hover:bg-gray-200">
                      <div v-if="!getTheme">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      </div>

                      <div v-else>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                          </svg>
                      </div>
                      
                  </button>

              </div>

          </div>

          <!-- Secondary nav -->
          <div class="md:hidden px-4 py-2 flex justify-between items-center rounded-lg bg-white dark:bg-x">

            <button @click="show=!show">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>

            <img src="/cryptocurrency.png" class="h-8 w-8" alt=""> 

            <button @click="changeTheme" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md flex justify-center items-center
                          transition hover:bg-gray-200">
                
                <div v-if="!getTheme">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                       <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </div>

                <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                    </svg>
                </div>
                      
            </button>

          </div>

          <!-- Dropdown nav -->
          <transition name="fade">
            <div v-if="show" class="mt-1 rounded-lg bg-white dark:dark:bg-x flex flex-col justify-center items-center px-8 py-2 space-y-2 text-gray-700 dark:text-white uppercase font-semibold">
                <a href="/" class="text-xl">HOME</a>
                <a v-for="nav in Navigation" :key="nav.name" :href="nav.link" class="text-xl">{{nav.name}}</a>
            </div>
          </transition>

      </div>
    </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease-in;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>