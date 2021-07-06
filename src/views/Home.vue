<template>
  <HeaderCv/>
  <div class="container">
    <div class="blockquote">
      <q class="blockquote__quote"> "{{quotes[0].quote}}" </q>
      <cite class="blockquote__author"> - {{quotes[0].author }} - </cite>
    </div>

    <div class="links">
      <div class="links__block">
        <router-link to="/a-propos" class="link link__about"> Qui-suis-je ? </router-link>
        <router-link to="/experiences" class="link link__experiences"> Mes expériences </router-link>
      </div>
      <div class="links__block">
        <router-link to="/competences" class="link link__skills"> Mes compétences </router-link>
        <router-link to="/formations" class="link link__trainings"> Mes formations </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderCv from '../components/HeaderCv.vue';

export default {

  name: 'Home',

  components: {
    HeaderCv
  },

   created(){

    // Called funciton shuffleQuotes for display randomly quote when the page loads
    this.shuffleQuotes(this.quotes);
  },

  data(){
      return {
          quotes: [
              {
              quote: "Il est difficile d’échouer mais il est encore plus difficile de ne pas avoir essayé de réussir",
              author: "Théodore Roosevelt"
              },
             {
               quote: "La chute n’est pas un échec. L’échec c’est de rester là où on est tombé.",
               author: "Socrate"
             },
             {
               quote: "Choisissez un travail que vous aimez et vous n’aurez plus à travailler un seul jour de votre vie.",
               author: "Confucius"
             },
             {
               quote: "Faites quelques chose et, si ça ne fonctionne pas, essayez autre chose.",
               author: "Franklin Delano Roosevelt"
             },
             {
               quote: "Le succès, c’est se promener d’échecs en échecs tout en restant motivé.",
               author: "Winston Churchill"
             },
             {
               quote: "L’imagination est plus importante que le savoir.",
               author: "Albert Einstein"
             },
             {
               quote: "Retourner en arrière est une aventure aussi périlleuse que de s’élancer vers l’avenir.",
               author: "Roger Fournier"
             },
             {
               quote: "Ceux qui ne font rien ne se trompent jamais.",
               author: "Théodore de Banville"
             },
             {
               quote: "La reconnaissance est la mémoire du cœur.",
               author: "Henri Lacordaire"
             },
             {
               quote: "On ne subit pas l’avenir, on le fait.",
               author: "Georges Bernanos"
             },
             {
               quote: "Les difficultés ne sont pas faites pour abattre mais pour être abattues.",
               author: "Charles de Montalembert"
             },
             {
               quote: "Le plus grand échec est de ne pas avoir le courage d’oser.",
               author: "Abbé Pierre"
             },
             {
               quote: "Il n'y a pas d'expert qui soit absolument compétent.",
               author: "Ptahhotep"
             },
             {
               quote: "Méfiez-vous d'une personne trop compétente, elle risque de manquer d'humanité.",
               author: "Inconnu"
             },
             {
               quote: "Donnez-vous la permission d’être un débutant.",
               author: "Julia Cameron"
             },
             {
               quote: "Nous sommes ce que nous faisons de manière répétitive, l’excellence n’est donc pas un acte mais une habitude",
               author: "Aristote"
             },
             {
               quote: "Chaque difficulté rencontrée doit être l’occasion d’un nouveau progrès.",
               author: "Pierre de Coubertin"
             },
             {
               quote: "Mon apprentissage n’a d’autre fruit que de me faire sentir combien il me reste à apprendre.",
               author: "Michel de Montaigne"
             },
          ],
      }
  },

  methods: {

    /**
     * Method fto randomly select index array quotes[]
     * @param array
     */
    shuffleQuotes(array){

      // DOC https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      // argument's sort function define a randomly number by substracting 0.5
      array.sort(()=> Math.random() - 0.5);

      return array;
    }
  },


}

</script>

<style scoped lang="scss">

@import '~@/assets/scss/main.scss';

  .blockquote {
    text-align: center;
    margin: 3rem 1rem;

    &__quote,
    &__author {
      display: block;
    }

    &__quote {
      font-family: 'Lobster';
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    &__author {
      font-size: 0.9rem;
    }
  }

  .links__block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    // margin: 1rem 1rem;
    padding: 2rem 0.5rem;

    .link {
      width: 10rem;
      height: 5rem;
      border-radius: 5px;
      box-shadow: 6px 5px 5px 1px rgb(88, 87, 85, 0.69) ;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $dark-grey;
      color: $beige;
      font-family: 'ArialBold';

      &:hover {
        transition: 0.5s;
        transform: translate(-0.2rem, -0.5rem);
        box-shadow: 6px 7px 4px 1px rgb(78, 77, 75, 0.69) ;
      }
    }
  }


@include screen-medium {

    .blockquote {

      margin: 3.5rem 7rem;
      &__quote {
        font-size: 1.5rem;
      }

      &__author {
        font-size: 1.1rem;
      }
    }

    .links__block {
      padding: 3rem 3rem;

      .link {
        width: 12rem;
        height: 7rem;
        font-size: 1.1rem;
      }
    }
}

@include screen-extra-large {
    .links__block {
      padding: 2rem 20rem 4rem 20rem;

      .link {
        width: 12rem;
        height: 7rem;
        font-size: 1.2rem;
      }
    }
}



</style>
