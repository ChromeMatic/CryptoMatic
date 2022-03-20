<template>
 <div>
    <NavBar/>
      <router-view/>
    <FooterSection/>
 </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import FooterSection from "./components/FooterSection.vue";
  export default{
     components:{NavBar,FooterSection}
  }
</script>