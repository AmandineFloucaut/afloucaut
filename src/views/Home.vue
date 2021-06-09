<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderCv/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HeaderCv from '@/components/HeaderCv.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HeaderCv
  }
}
</script>
