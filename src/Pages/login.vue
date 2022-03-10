<script>
    export default {
        name:'Login',
        data:()=>({
            user:{
                email:'',
                password:''
            }
        }),
        computed:{},
        methods:{
           
        }
    }
</script>

<template>
   <div class="w-full lg:h-screen flex font-Rajdhani uppercase">

    <div class="bg-gradient-to-br from-indigo-700 to-green-400 h-full w-1/2 hidden md:flex flex-col justify-center items-center px-4">
        <h1 class="text-7xl uppercase font-medium text-white text-center">
            Welcome Back comrade
        </h1>
    </div>

    <div class="flex flex-col lg:py-8 lg:px-8 lg:h-full lg:w-1/2 w-full justify-center items-center lg:space-y-8 space-y-6 bg-gray-100">

       <div class="flex flex-col space-y-1 justify-center items-center">
            <img src="/cryptocurrency.png" class="h-24 w-24" alt="">
            <h1 class="text-4xl font-semibold text-gray-700">CryptoMatic</h1>
       </div>

       <div class="flex flex-col space-y-2 justify-center items-center">
           
           <div>
                <label for="email" class="block mb-1 text-lg font-semibold text-gray-700 dark:text-gray-300">email</label>
                <input v-model="user.email" type="email" class="bg-gray-50 lg:w-96 w-72 px-2 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cryptomatic@gmail.com" required>
           </div>

            <div>
                <label  for="password" class="block mb-1 text-lg font-semibold text-gray-700 dark:text-gray-300">password</label>
                <input v-model="user.password" type="password" placeholder="Please enter password" class="bg-gray-50 lg:w-96 w-72 px-2 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
           </div>

       </div>

       <div class="flex flex-col space-y-4 justify-center items-center">

            <button  class="py-2 w-72 rounded-lg uppercase font-semibold text-xl bg-green-500">
               <h1 class="text-white">login</h1>
           </button>

           <button   class="py-2 w-72 bg-white rounded-lg uppercase font-semibold text-xl text-gray-600">
               <h1 class="text-green-500">google</h1>
           </button>

       </div>

       <div>
           <h1 class="text-2xl font-semibold text-gray-500">OR</h1>
       </div>

       <div class="flex flex-col space-y-4 justify-center items-center">

            <button  class="py-2 w-72 rounded-lg uppercase font-semibold text-xl bg-indigo-500">
               <h1 class="text-white">Sign Up</h1>
           </button>

       </div>

    </div>
      
   </div>
</template>