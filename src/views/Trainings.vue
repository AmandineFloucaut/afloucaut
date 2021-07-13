<template>

<ul class="trainings">
    <li class="opquast"> 2021 - <a href="" title="Télécharger le document pdf" @click="downloadOpquastPdf"> Certification Opquast </a> - 880/1000 :
        <ul class="opquast__skills">
            <li> Maîtriser le vocabulaire et les métiers du projet Web </li>
            <li> Prendre en compte la diversité et les exigences des utilisateurs </li>
            <li> Connaître les bonnes pratiques, leur conception et leur utilisation </li>
            <li> Utiliser une check-list qualité Web </li>
            <li> Prévenir les risques, renforcer l’assurance qualité Web </li>
        </ul>
    </li>
    <li> 2020-2021 - Formation Développeur Web et Mobile Ecole O'clock </li>
    <li> 2019-2020 - Formation à distance Openclassrooms </li>
    <li> 2017 - Certification de l'Autorité des Marché Financiers </li>
    <li> 2007-2009 - BTS banque marché des particuliers </li>
</ul>

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
    @include list-page {
        margin: 2rem;
    }

    .opquast__skills {
        @include list-page {
            margin-left: 4rem;
        }
    }
}


</style>