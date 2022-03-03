<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:'NavBar',
    data: () => ({
      Navigation:[
        {name:'crypto news',link:'/news'},
        {name:'track crypto', link:'/track'},
        {name:'watch-list',link:'/watchlist'},
      ],
      show:false,
    }),
    created(){},
    computed:mapGetters(["getTheme"]),
    methods:mapActions(["changeTheme"])
}
</script>

<template>
    <div :class="getTheme ? 'dark' : ''">
      <div class="w-full lg:px-8 py-2 px-4  bg-gray-100 dark:bg-gray-800 font-Rajdhani uppercase">

          <!-- Primary nav -->
          <div class="hidden md:flex justify-between items-center rounded-lg h-16 w-full bg-white dark:bg-gray-900">

              <div class="flex justify-center items-center space-x-4 text-gray-700 dark:text-white px-8 font-semibold text-xl">

                  <a href="/" class="flex justify-center items-center space-x-1 transition hover:text-indigo-500">
                    <img src="/cryptocurrency.png" class="h-8 w-8" alt="">  
                    <h1>home</h1>
                  </a>

                  <a v-for="nav in Navigation" :key="nav.name" class="transition hover:text-indigo-500" :href="nav.link">{{nav.name}}</a>

              </div>

              <div class="flex justify-center items-center space-x-2 text-gray-700 dark:text-white px-8 font-semibold text-xl">
                  
                  <a href="/signUp" class="transition hover:text-indigo-500">SignUp</a>
                
                  <a href="/login" class="transition hover:text-indigo-500 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                  </a>

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
          <div class="md:hidden px-4 py-2 flex justify-between items-center rounded-lg bg-white dark:bg-gray-900">

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
            <div v-if="show" class="mt-1 rounded-lg bg-white dark:bg-gray-900 flex flex-col justify-center items-center px-8 py-2 space-y-2 text-gray-700 dark:text-white uppercase font-semibold">
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