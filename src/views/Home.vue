<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderCv/>
    <Banner/>
    <Experiences/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HeaderCv from '@/components/HeaderCv.vue';
import Banner from '@/components/Banner.vue';
import Experiences from '@/components/Experiences.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HeaderCv,
    Banner,
    Experiences
  }
}
</script>
