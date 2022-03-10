<script>
import SideNavVue from "../components/SideNav.vue";
import SearchBar from "../components/SearchBar.vue";
import { mapGetters } from "vuex";
export default {
  name:'DashBoard',
  components:{SideNavVue,SearchBar},
  data:() => ({}),
  computed:mapGetters(["getTheme"]),
}
</script>

<template>
<div :class="getTheme ? 'dark' : ''">
  <div class="font-Rajdhani flex dark:bg-dashC ">

      <SideNavVue/>

      <div class="flex flex-col w-full space-y-2 p-2">
        
        <SearchBar/>

        <div class="rounded dark:bg-x bg-gray-50 w-full h-64">

        </div>

         <div class="rounded dark:bg-x bg-gray-50 w-full h-64">

        </div>

      </div>

    </div>
</div>
</template>
