<template>

<div class="trainings">

    <p class="opquast trainings__skills" >
        <strong> 2021 - <a href="" title="Télécharger le document pdf" @click="downloadOpquastPdf">  Certification Opquast </a></strong>   - 880/1000 : évaluation de la culture et du vocabulaire des activités du web, son approche est multidisciplinaire et transversale avec une étude des divers domaines et métiers tels que le SEO, l'écoconception, l'accessibilité, le design, la gestion de projet. L'expérience utilisateur est également un de point fort de cette formation. <a href="https://www.opquast.com/" target="_blank" title="Au clic, le lien s'ouvrira dans une nouvelle fenêtre.">(Lien vers le site officiel d'opquast)</a>

        <ul class="opquast__skills">
            <li> Maîtriser le vocabulaire et les métiers du projet Web </li>
            <li> Prendre en compte la diversité et les exigences des utilisateurs </li>
            <li> Connaître les bonnes pratiques, leur conception et leur utilisation </li>
            <li> Utiliser une check-list qualité Web </li>
            <li> Prévenir les risques, renforcer l’assurance qualité Web </li>
        </ul>
    </p>

    <p class="oclock trainings__skills" >
        <strong> 2020-2021 -  Formation Développeur Web et Mobile Ecole O'clock </strong> (Labellisée Grande Ecole du Numérique) :
            <ul class="oclock__details">
                <li> Du 26 octobre 2020 au 13 avril 2021 </li>
                <li> 3 mois de socle avec les technologies HTML/CSS, PHP, MySQL et Javascript. Approche SOLID, architecture MVC, CRUD, utilisation de la méthode Ajax, Programmation Orientée Objet. </li>
                <li> 1 mois de spécialisation Wordpress et Vue.js </li>
                <li> 1 mois de projet professionnel en conditions réelles en suivant la méthodologie SCRUM </li>
            </ul>
    </p>
    <p class="openclassrooms trainings__skills" >
        <strong> 2019-2020 -  Formation à distance Openclassrooms </strong>  :
        <ul class="openclassrooms__details">
            <li> Ligne de commande et terminal </li>
            <li> Créer un site design avec Wordpress </li>
            <li> Apprendre à coder avec Javascript </li>
            <li> Créer un site web avec HTML et CSS 3 </li>
        </ul>
    </p>
    <p class="trainings__skills"> <strong> 2017 -  Certification de l'Autorité des Marché Financiers </strong>  </p>
    <p class="trainings__skills"> <strong> 2007-2009 -  BTS banque marché des particuliers </strong>  </p>
</div>

</template>

<script>
import jsPDF from 'jspdf';

export default {
    name: 'Trainings',

    methods: {

        downloadOpquastPdf(){

            let pdfField = new jsPDF();
            pdfField.save("../docs/opquast_certification.pdf");
        }
    }
}

</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.trainings {

    margin: 2rem 1rem;

    &__skills {
        margin: 2rem 0;

         &>strong {
        font-weight: bold;
    }
    }

    .opquast__skills,
    .oclock__details,
    .openclassrooms__details {
        @include list-page {
            margin-left: 2rem;
            list-style: square;
        }
    }

}

@include screen-medium {
    .trainings {
        margin: 3rem;
    }
}

@include screen-large {
    .trainings {
        margin: 5rem;
    }
}

@include screen-extra-large {
    .trainings {
        margin: 7rem;
    }
}



</style>