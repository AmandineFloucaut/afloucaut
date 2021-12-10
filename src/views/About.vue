<template>
  <div class="about">
      <h1 class="about__title title"> Qui-suis-je ? </h1>
      <div v-for="(about, index) in aboutContent" :key="index">
        <p class="about__content">
          {{about}}
        </p>
      </div>
      <div class="about__content">
        <p @click="test">{{aboutContentList[0]}}</p>
        <ul class="about__content list" v-for="(contentList, index) in aboutContentList[1]" :key="index">
          <li class="">{{contentList}}</li>
        </ul>
      </div>
  </div>
</template>

<script>

export default{
  name: 'About',

  data() {
    return {

      aboutContent: [
      "Après 14 ans dans la gestion de relation clientèle, j'ai démarré une reconversion professionnelle début 2019. A la suite d'un bilan de compétences, j'ai commencé à me former seule à la programmation sur Openclassrooms, cela m'a permis de confirmer mon choix de reconversion.",
      "J'ai ensuite intégrée une formation intensive de développeur web au sein de l'école O'clock en 2020. Celle-ci c'est déroulée sur 5 mois en téléprésentiel, le dernier mois étant consacré à un projet professionnel en conditions réelles suivant la méthodologie SCRUM.",
      "La passion, la motivation, l'envie d'apprendre permanente et la positivité sont mes moteurs. En plus de la programmation, je suis passionnée de Photographie et amatrice de lecture et de musique. je suis également présidente d'un association."
      ],

      aboutContentList: [
        "Je suis enfin prête à me lancer sur le marché du travail et afin d'accélérer ma progression, je suis à la recherche :",
        [
        "de rencontres avec des développeurs indépendants, pour créer des partenariats ou simplement échanger sur le métier",
        "d'un poste de développeur web  dans une petite entreprise au sein de laquelle je pourrai être force de proposition (temps plein ou temps partiel)"
        ],
      ]
    }
  },

  methods: {
    test(){
      console.log(this.about_content_list);
    }
  }
}

</script>

<style scoped lang="scss">

@import '~@/assets/scss/main.scss';

.about {
  padding: 0.5rem 1.2rem;

  &__title {
    @include title-page;
  }

  &__content {
    @include paragraph-page;

    &.list{
      @include list-page {
        margin-top: 0;
      };
    }

  }
}

@include screen-medium {

  .about {
    margin : 3rem;

    &__title {
      margin-bottom: 1.5rem;
    }
  }
}

@include screen-large {

  .about {
    margin: 2rem 5rem 5rem 5rem;
    font-size: 1.2rem;

    &__title {
      margin-bottom: 2rem;
    }

    &__content {
      line-height: 1.5rem;
    }
  }
}

@include screen-extra-large {

  .about {
    margin: 4rem 7rem 7rem 7rem;
  }
}

</style>

