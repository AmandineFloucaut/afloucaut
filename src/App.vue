<template>
    <main id="app">
        <!-- <HeaderCv/> -->
        <Nav/>

        <section>
          <router-view/>
        </section>

        <Footer/>
    </main>
</template>

<script>

import HeaderCv from './components/HeaderCv.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Application',

  components: {
    HeaderCv,
    Nav,
    Footer
  },

  data(){
    return {
      navStyle: 'display:block'
    }
  },
}
</script>


<style scoped lang="scss">

@import '~@/assets/scss/main.scss';

#app {

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    section {
      flex-grow: 1;
      background-color: $beige;
      background-image: url("~@/assets/images/image_fond_nuage.png");
      background-size: cover;
    }
}



</style>
