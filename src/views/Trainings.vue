<template>

<div class="trainings">

    <section class="opquast trainings__skills" >

        <h3 class = "trainings__title">2021 - <a href="" title="Télécharger le document pdf" @click="downloadOpquastPdf">  Certification Opquast </a> - 880/1000 :</h3>

        <p> {{opquast.presentation}} </p>

        <a :href="opquast.link.link" target="_blank" title="Au clic, le lien s'ouvrira dans une nouvelle fenêtre."> {{opquast.link.title}} </a>

        <ul class="opquast__skills" v-for="(skillOpquast, index) in opquast.skills" :key="index">
            <li> {{skillOpquast}} </li>
        </ul>
    </section>

    <section class="oclock trainings__skills" >

        <h3 class = "trainings__title"> 2020-2021 -  Formation Développeur Web et Mobile Ecole O'clock (Labellisée Grande Ecole du Numérique) : </h3>

            <ul class="oclock__details" v-for="(skillOclock, index) in oclock" :key="index">
                <li> {{skillOclock}} </li>
            </ul>
    </section>

    <section class="openclassrooms trainings__skills" >
        <h3 class = "trainings__title"> 2019-2020 -  Formation à distance Openclassrooms : </h3>
        <ul class="openclassrooms__details" v-for="(skillOpenclassrooms, index) in openclassrooms" :key="index">
            <li> {{skillOpenclassrooms}} </li>

        </ul>
    </section>
    <p class="trainings__skills trainings__title" > 2017 -  Certification de l'Autorité des Marché Financiers </p>
    <p class="trainings__skills trainings__title"> 2007-2009 -  BTS banque marché des particuliers </p>
</div>

</template>

<script>
import jsPDF from 'jspdf';

export default {
    name: 'Trainings',

    data(){
        return {

            opquast: {
                "presentation": "Evaluation de la culture et du vocabulaire des activités du web, son approche est multidisciplinaire et transversale avec une étude des divers domaines et métiers tels que le SEO, l'écoconception, l'accessibilité, le design, la gestion de projet. L'expérience utilisateur est également un de point fort de cette formation.",
                "link": {
                    "title": "(Lien vers le site officiel d'opquast)",
                    "link": "https://www.opquast.com/",
                },
                "skills": [
                    "Maîtriser le vocabulaire et les métiers du projet Web",
                    "Prendre en compte la diversité et les exigences des utilisateurs",
                    "Connaître les bonnes pratiques, leur conception et leur utilisation",
                    "Utiliser une check-list qualité Web",
                    "Prévenir les risques, renforcer l’assurance qualité Web",
                ],
            },

            oclock: [
                "Du 26 octobre 2020 au 13 avril 2021",
                "3 mois de socle avec les technologies HTML/CSS, PHP, MySQL et Javascript. Approche SOLID, architecture MVC, CRUD, utilisation de la méthode Ajax, Programmation Orientée Objet.",
                "1 mois de spécialisation Wordpress et Vue.js",
                "1 mois de projet professionnel en conditions réelles en suivant la méthodologie SCRUM",
            ],

            openclassrooms: [
                "Ligne de commande et terminal",
                "Créer un site design avec Wordpress",
                "Apprendre à coder avec Javascript",
                "Créer un site web avec HTML et CSS 3",
            ],
        }
    },

    methods: {

        downloadOpquastPdf(){

            let pdfField = new jsPDF();
            pdfField.save("./docs/opquast_certification.pdf");
        }
    }
}

</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.trainings {

    margin: 2rem 1rem;

    &__title {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

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