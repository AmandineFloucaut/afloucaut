<template>
    <main id="app">
        <HeaderCv/>
        <Nav/>

        <section>
          <router-view/>
        </section>

        <Banner/>
    </main>
</template>

<script>
import HeaderCv from './components/HeaderCv.vue';
import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';

export default {
  name: 'Application',

  components: {
    HeaderCv,
    Nav,
    Banner
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

    section {
      flex-grow: 1;
      background-color: $beige;
    }
}



</style>
