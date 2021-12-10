<template>
    <div class="skills">
        <section class="skills">

            <h1 class="skills__title"> Hard Skills </h1>
                <div class="skills-hard">
                    <div class="skills-hard__block" v-for="(skill, index) in hardSkills" :key="index" >
                        <div>
                            <h2 class="skills__type"> {{index}} </h2>
                            <ul class="skills__list" v-for="(skill, name) in hardSkills[index]" :key="name" >
                                <li> {{skill}} </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>

        <section class="skills">

            <h1 class="skills__title"> Soft Skills </h1>
                <div class="skills-soft">
                    <div class="skills-soft__block"  >
                        <div>
                            <ul class="skills__list" v-for="(skill, index) in softSkills" :key="index">
                                <li> {{skill}} </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    </div>

</template>

<script>
export default {
    name: 'Skills',

    data(){
        return {
            hardSkills: {
                "Technologies": [
                    "HTML / CSS",
                    "SASS",
                    "PHP",
                    "Javascript",
                    "Ajax"
                ],
                "Frameworks et CMS" :[
                    "WordPress",
                    "Vue.JS",
                    "Lumen",
                    "Bootstrap",
                    "Symfony",
                ],
                  "Environnements": [
                    "Apache",
                    "Linux",
                    "Git",
                    "npm",
                    "composer"
                ],
                "Graphisme" :[
                    "Adobe Lightroom",
                    "Adobe Photoshop CC",
                    "Canva",
                ]
            },

            softSkills: [
                "Détecter et analyser les besoins clients",
                "Développer et fidéliser un portefeuille",
                "Traiter les urgences et gestion des conflits",
                "Analyse des risques financiers",
                "Rédaction (descriptif, rapport, analyse ...)",
                "Gestion de projet en méthodes agiles et notamment le modèle Scrum",
            ],
        }
    }
}
</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.skills {
    padding: 1rem 1.5rem 0rem 1.5rem;

    &__title {
        @include title-page;
    }

    &-hard {
        display: flex;
        flex-wrap: wrap;
    }

    &-hard__block,
    &-soft__block {
        display: flex;
        margin: 2rem 2rem;
    }

    &-hard__block {
        justify-content: space-between;
    }

    &__type {
        font-family: "ArialBold";
    }

    &__list {
        @include list-page;
    }
}

@include screen-medium {
    .skills {
        margin: 3rem;
    }
}

@include screen-large {

    .skills {
        &-hard {
            flex-wrap: nowrap;
            &>div {
                margin-right: 5rem;
            }
        }
    }
}

@include screen-extra-large  {

    .skills {
        margin: 2rem;
    }
}
</style>