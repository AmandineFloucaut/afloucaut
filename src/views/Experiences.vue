<template>
    <div class="experiences" >
        <h1 class="experiences__title" @click="test"> Projets O'clock </h1>

        <div v-for="(element, index) in projects" :key="index">

            <section class="shabadabada-project project">

                <h3 class="project__title">
                    {{element.title}}
                </h3>

                <p  class="project__technos">
                    {{element.techno}}
                </p>

                <!-- <div class="project__images">
                    TODO Dynamiser les images, BUG: ne récupère plus l'image compiler lors de l'injection de la variable image => v-for="(image, index) in element.images" :key="index"
                    <img src="@/assets/images/shabadabada-desktop.png" alt="">
                    <img src="@/assets/images/shabadabada-mobile.png" alt="">
                </div> -->

                <p class="project__presentation">
                    {{element.presentation}}
                </p>


                <ul class="project__tasks" v-for="(task, index) in element.tasks" :key="index">
                    <li class="task">{{task}}</li>
                </ul>

            </section>

            <hr>

        </div>
    </div>
</template>

<script>

export default {

    name: 'Experiences',

    data(){
        return {
            publicPath: process.env.BASE_URL,
            projects: {
                "project.1" : {
                    "title": "Shabadabada",
                    "techno": "WordPress, Api Externe, PHP, POO, Composer, Vue.js, SASS, Axios, npm, parcel",
                    "images": [
                        "@/assets/images/shabadabada-desktop.png",
                       "@/assets/images/shabadabada-mobile.png",
                    ],
                    "presentation": "Shabadabada est un site de divertissement sur lequel les utilisateurs peuvent tester leurs connaissances musicales au travers de différents blind tests. Il a été construit par une équipe de 3 personnes. Solène Pilliard est à l'origine de ce projet qui a été réalisé en conditions réelles, sur une période de 3 semaines et demi en suivant la méthodologie Scrum.",
                    "tasks": [
                        "Réalisation des wireframes, du cahier des charges et des documents relatifs à la base de données",
                        "Création d'un plugin (Architecture Classes et Models)",
                        "Automatisation des endpoints de l'Api Deezer pour l'import des données dans le back office",
                        "Préparation des routes custom de l'Api Interne et des playlists aléatoires à envoyer au front",
                        "Intégration (architecture du style avec SASS)",
                        "Récupération des données et création des parties côté utilisateur",
                        "Enregistrement des parties créees, puis jouées implémentées des réponses et scores de l'utilisateur"
                    ],
                },

                "project.2" : {
                    "title": "Oprofile",
                    "techno": "WordPress, POO PHP, Composer, Vue.js, SASS, Axios, npm",
                    "video": "https://www.loom.com/embed/b5c939497b1d430e9b751a873e95a979",
                    "presentation": "Oprofile est un site fictif qui met en relation des clients avec des développeurs. Ce projet m'a permis de travailler la création et personnalisation de thème avec Wordpress ainsi que l'authentification et les droits des utilisateurs.",
                    "tasks": [
                        "Intégration et fonctionnalités front",
                        "Architecture du back, approche SOLID",
                        "Création plugin, custom routes",
                        "Gestion de l'authentification et de la sécurité (JWT)",
                    ]
                },

                "project.3" : {
                    "title": "Todolist",
                    "techno": "Technos : HTML, CSS, POO PHP, Lumen, Composer, POO Javascript, Ajax",
                    "presentation": " Site de gestion de tâches et rappel, le front a été réalisé avec le trio HTML/CSS/javascript et le back avec le framework PHP Lumen",
                    "tasks": [
                        "Intégration et fonctionnalités front (création, modification, archive des tâches côté utilisateur)",
                        "Création et gestion du back (architecture MVC, CRUD)",
                    ]
                },

                "project.4" : {
                    "title": "Oshop",
                    "techno": "HTML, CSS, POO PHP, Composer",
                    "presentation": " Site factice de vente de chaussures",
                    "tasks": [
                        "Intégration et fonctionnalités front (Tri et affichage des produits par catégories)",
                        "Création et gestion du back (architecture MVC, CRUD)",
                        "Gestion de l'authentification et de la sécurité (ACL, Token)",
                        "Gestion du router (Altorouter)",
                    ]
                }
            }
        }
    },

    methods:  {
        test(){
            console.log(this.projects);
            // console.log(BASE_URL);

        }
    }

}
</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.experiences {

    padding: 1.2rem;

    &>h1 {
        margin: 2rem;
    }

    &>hr {
        border: 0;
        height: 1px;
        background: $dark-grey;
        background: linear-gradient(90deg, rgba(230,227,220,1) 0%, rgba(78,77,75,1) 50%, rgba(230,227,220,1) 100%);
    }



    &__title {
       @include title-page;
    }

    .project {
        margin: 4rem 1rem 2rem 1rem;

        &__title {
            font-family: 'Matiz';
            font-size: 1.2rem;
            text-align: center;
        }

        &__technos {
            margin: 0.5rem ;
            font-style: italic;
            text-align: center;
        }

        &__images {

            width: 70%;
            margin: 1rem auto;
            padding: 1rem 0 1rem 0;
            display: flex;
            justify-content: center;
            background-color: rgba(78, 77, 75, 0.2);

            &>img {
                border: solid 5px $dark-grey;
                filter: grayscale(100%);
                margin: 0.5rem;
            }

            &>img:hover {
                filter: grayscale(0);
            }

            &>:nth-child(1) {
                width: 60%;
            }

            &>:nth-child(2) {
                width: 20%;
            }

            &>iframe  {
                width: 100%;
            }
        }

        &__presentation {
            @include paragraph-page;
        }

        &__tasks {
           @include list-page;
        }
    }

    &-bank {
        margin: 2rem 1rem 4rem 1rem;
    }
}

@include screen-medium {

    .experiences {


        .project {

            margin: 4rem 6rem 6rem 6rem;

            &__images {
                width: 50%;
            }
        }

        &-bank {
            margin: 2rem 6rem 4rem 6rem;
        }

    }
}

@include screen-large {

    .experiences {

        &__title {
            font-size: 1.4rem;
        }

        .project {

            font-size: 1.2rem;

            &__title {
                font-size: 1.5rem;
            }

            &__presentation {
                @include paragraph-page {
                    line-height: 1.4rem;
                };
            }

            &__tasks {
                line-height: 1.4rem;
            }
        }
    }
}

</style>