<template>

    <section class="skills ">

        <h1 class="skills__title"> Hard Skills </h1>
            <div class="skills-hard">
            <div class="skills-hard__block">
                <div>
                    <h2 class="skills__type"> Technologies </h2>
                        <ul class="skills__list">
                            <li> HTML / CSS </li>
                            <li> SASS </li>
                            <li> PHP </li>
                            <li> Javascript </li>
                            <li> Ajax </li>
                        </ul>
                </div>

                <div>
                    <h2 class="skills__type"> Frameworks et CMS </h2>
                        <ul class="skills__list">
                            <li> WordPress </li>
                            <li> Vue.JS </li>
                            <li> Lumen </li>
                            <li> Bootstrap </li>
                        </ul>
                </div>
            </div>

            <div class="skills-hard__block">
                <div>
                    <h2 class="skills__type"> Environnements </h2>
                        <ul class="skills__list">
                            <li> Apache </li>
                            <li> Linux </li>
                            <li> Git </li>
                            <li> npm </li>
                            <li> composer </li>
                        </ul>
                </div>
                <div>
                    <h2 class="skills__type"> Graphisme </h2>
                        <ul class="skills__list">
                            <li> Adobe Lightroom </li>
                            <li> Adobe Photoshop CC </li>
                        </ul>
                </div>
            </div>
            </div>
    </section>

    <section class="skills skills-soft">

        <h1 class="skills__title"> Soft Skills </h1>

        <ul class="skills__list">
            <li> Détecter et analyser les besoins clients </li>
            <li> Développer et fidéliser un portefeuille </li>
            <li> Traiter les urgences et gestion des conflits </li>
            <li> Analyse des risques financiers </li>
            <li> Rédaction (descriptif, rapport, analyse ...) </li>
            <li> Gestion de projet en méthodes agiles et notamment le modèle Scrum </li>
        </ul>

    </section>

</template>

<script>
export default {
    name: 'Skills'
}
</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.skills {
    padding: 1rem 1.5rem 0rem 1.5rem;

    &__title {
        @include title-page;
    }

    &-hard__block {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;

        &>div {
            width: 50%;
        }
    }

    &__type {
        font-family: "ArialBold";
    }

    &__list {
        @include list-page;
    }
}

@include screen-large {

    .skills {

        margin: 3rem;

        &-hard {
            display: flex;
            justify-content: center;

            &__block {
                width: 70%;
            }
        }
    }

}
</style>