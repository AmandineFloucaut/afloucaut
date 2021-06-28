<template>
  <div class="about">
    <h1 class="about__title title"> Qui-suis-je ? </h1>

    <p class="about__content">
      Après 14 ans dans la gestion de relation clientèle, j'ai démarré une <strong> reconversion professionnelle </strong> début 2019. <br>
      A la suite d'un bilan de compétences, j'ai commencé à me former seule à la <strong> programmation </strong> sur Openclassrooms, cela m'a permis de confirmer mon choix de reconversion. <br>
      J'ai ensuite intégrée une formation intensive de développeur web au sein de l'<strong>école O'clock </strong> en 2020. Celle-ci c'est déroulée sur 5 mois en téléprésentiel, le dernier mois étant consacré à un projet professionnel en conditions réelles suivant la méthodologie SCRUM.
    </p>
    <p class="about__content">
      Je suis enfin prête à me lancer sur le marché du travail et afin d'accélérer ma progression, je recherche soit un poste de <strong> développeur web Junior </strong> dans une entreprise qui souhaite m'aider à monter en compétences, soit un poste de <strong> concepteur développeur d'applications en alternance </strong> (18 mois - rythme 2js formation / 3js entreprise).
    </p>
    <p class="about__content">
      La passion, la motivation, l'envie d'apprendre permanente et la positivité sont mes moteurs.
      En plus de la programmation, je suis passionnée de Photographie, j'adore passer du temps au tri, à trouver les meilleurs clichés et à les perfectionner via mon logiciel de retouche. J'ai un attrait pour le graphisme et je suis également amatrice de lecture et de musique.
    </p>
  </div>
</template>

<script>

export default{
  name: 'About'
}

</script>

<style scoped lang="scss">

@import '~@/assets/scss/main.scss';

.about {
  padding: 1.2rem;

  &__title {
    @include title-page;
  }

  &__content {
    @include paragraph-page;
  }
}

</style>

