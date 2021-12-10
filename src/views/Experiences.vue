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

                <div class="project__images" v-for="(image, index) in element.images" :key="index">
                    <img :src='"@/assets/images/" + image + ".png"' alt="">
                    <img src="@/assets/images/shabadabada-mobile.png" alt="">
                </div>

                <p class="project__presentation">
                    Shabadabadaest un site de divertissementsur lequel les utilisateurs peuvent tester leurs connaissances musicales au travers de différentsblind tests.
                    Il a été construit par une équipe de 3 personnes. <a href="https://github.com/SolenePilliard" target="_blank" title="Au clic, le lien sera ouvert dans une nouvelle fenêtre.">Solène Pilliard</a> est à l'origine de ce projet qui a été réalisé en conditions réelles, sur une période de 3 semaines et demi en suivant la méthodologie Scrum.
                </p>

                <ul class="project__tasks">
                    <li class="task">Réalisation des wireframes, du cahier des charges et des documents relatifs à la base de données</li>
                    <li class="task">Création d'un plugin (Architecture Classes et Models)</li>
                    <li class="task">Automatisation des endpoints de l'Api Deezer pour l'import des données dans le back office</li>
                    <li class="task">Préparation des routes custom de l'Api Interne et des playlists aléatoires à envoyer au front</li>
                    <li class="task">Intégration (architecture du style avec SASS)</li>
                    <li class="task">Récupération des données et création des parties côté utilisateur</li>
                    <li class="task">Enregistrement des parties créees, puis jouées implémentées des réponses et scores de l'utilisateur</li>
                </ul>



            </section>

            <hr>

            <!-- <section class="oprofile-project project">

                <h3 class="project__title">
                    Oprofile
                </h3>

                <p class="project__technos">
                    WordPress, POO PHP, Composer, Vue.js, SASS, Axios, npm
                </p>

                <div class="project__images" >
                    <iframe src="https://www.loom.com/embed/b5c939497b1d430e9b751a873e95a979" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>

                <p class="project__presentation"> Oprofile est un site fictif qui met en relation des clients avec des développeurs. Ce projet m'a permis de travailler la création et personnalisation de thème avec Wordpress ainsi que l'authentification et les droits des utilisateurs.</p>

                <ul class="project__tasks">
                    <li>Intégration et fonctionnalités front</li>
                    <li>Architecture du back, approche SOLID</li>
                    <li>Création plugin, custom routes</li>
                    <li>Gestion de l'authentification et de la sécurité (JWT)</li>
                </ul>

            </section>

            <hr>

            <section class="todolist-project project">

                <h3 class="project__title">
                    Todolist
                </h3>

                <p class="project__technos">
                    Technos : HTML, CSS, POO PHP, Lumen, Composer, POO Javascript, Ajax
                </p>

                <p class="project__presentation">
                    Site de gestion de tâches et rappel, le front a été réalisé avec le trio HTML/CSS/javascript et le back avec le framework PHP Lumen.
                </p>

                <ul class="project__tasks">
                    <li>Intégration et fonctionnalités front (création, modification, archive des tâches côté utilisateur)</li>
                    <li>Création et gestion du back (architecture MVC, CRUD)</li>
                </ul>

            </section>

            <hr>

            <section class="oshop-project project">

                <h3 class="project__title">
                    Oshop
                </h3>

                <p class="project__technos">
                    HTML, CSS, POO PHP, Composer
                </p>

                <p class="project__presentation"> Site factice de vente de chaussures</p>

                <ul class="project__tasks">
                    <li>Intégration et fonctionnalités front (Tri et affichage des produits par catégories)</li>
                    <li>Création et gestion du back (architecture MVC, CRUD)</li>
                    <li>Gestion de l'authentification et de la sécurité (ACL, Token) </li>
                    <li>Gestion du router (Altorouter)</li>
                </ul>

            </section> -->

        </div>
    </div>
</template>

<script>

export default {

    name: 'Experiences',

    data(){
        return {
            projects: {
                "project.1" : {
                    "title": "Shabadabada",
                    "techno": "WordPress, Api Externe, PHP, POO, Composer, Vue.js, SASS, Axios, npm, parcel",
                    "images": [
                        "shabadabada-desktop",
                       " shabadabada-mobile.png",
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

            for(let project in this.projects){
                console.log(this.projects);
                console.log(project);
                // for(let detail of project){
                //     console.log(detail);
                //     console.log(detail.title);
                // }
                
            }

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