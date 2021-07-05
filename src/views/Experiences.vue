<template>
    <div class="experiences title">
        <h1> Mes experiences </h1>

        <section class="experience experience-oclock">

            <div class="shabadabada-project project">

                <h3 class="project__title">
                    Shabadabada
                </h3>

                <p  class="project__technos">
                    WordPress, Api Externe, PHP, POO, Composer, Vue.js, SASS, Axios, npm, parcel
                </p>

                <div class="project__images">
                    <img src="@/assets/images/shabadabada-desktop.png" alt="">
                    <img src="@/assets/images/shabadabada-mobile.png" alt="">
                </div>

                <p class="project__presentation">
                    Shabadabada est un <strong> site de divertissement </strong> sur lequel les utilisateurs peuvent tester leurs connaissances musicales au travers de différents <strong>blind tests</strong>. <br>
                    Il a été construit par une équipe de 3 personnes. <a href="https://github.com/SolenePilliard">Solène Pilliard</a> est à l'origine de ce projet qui a été réalisé en conditions réelles, sur une période de 3 semaines et demi en suivant la méthodologie Scrum.
                </p>
                <p class="project__presentation">
                    Nous avons décidé de continuer à faire vivre ce site, en venant l'implémenter de nouvelles fonctionnalités et nouvelles catégories. N'hésitez donc pas à le visiter régulièrement ! <br>
                </p>

                <p class="project__tasks">
                    <ul >
                        <li class="task">Réalisation des wireframes, du cahier des charges et des documents relatifs à la base de données</li>
                        <li class="task">Création d'un plugin (Architecture Classes et Models)</li>
                        <li class="task">Automatisation des endpoints de l'Api Deezer pour l'import des données dans le back office</li>
                        <li class="task">Préparation des routes custom de l'Api Interne et des playlists aléatoires à envoyer au front</li>
                        <li class="task">Intégration (architecture du style avec SASS)</li>
                        <li class="task">Récupération des données et création des parties côté utilisateur</li>
                        <li class="task">Enregistrement des parties créees, puis jouées implémentées des réponses et scores de l'utilisateur</li>
                    </ul>
                </p>


            </div>

            <div class="oprofile-project project">

                <h3 class="project__title">
                    Oprofile
                </h3>

                <p class="project__technos">
                    WordPress, POO PHP, Composer, Vue.js, SASS, Axios, npm
                </p>

                <div class="project__images" style="position: relative; padding-bottom: 48.90625%; height: 0;">
                    <iframe src="https://www.loom.com/embed/b5c939497b1d430e9b751a873e95a979" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                </div>

                <p class="project__presentation"> Oprofile est un site fictif qui met en relation des clients avec des développeurs.Un thème Wordpress a été créé pour le front et un plugin pour la gestion du back.</p>

                <p class="project__tasks">
                    <ul>
                        <li>Intégration et fonctionnalités front</li>
                        <li>Architecture du back, approche SOLID</li>
                        <li>Création plugin, custom routes</li>
                        <li>Gestion de l'authentification et de la sécurité (JWT)</li>
                    </ul>
                </p>

            </div>

            <div class="todolist-project project">
                <h3 class="project__title">
                    Todolist
                </h3>

                <p class="project__technos">
                    Technos : HTML, CSS, POO PHP, Lumen, Composer, POO Javascript, Ajax
                </p>

                <p class="project__presentation">
                    Site de gestion de tâches et rappel, le front a été réalisé avec le trio HTML/CSS/javascript et le back avec le framework PHP Lumen.
                </p>

                <p class="project__tasks">
                    <ul>
                        <li>Intégration et fonctionnalités front (création, modification, archive des tâches côté utilisateur)</li>
                        <li>Création et gestion du back (architecture MVC, CRUD)</li>
                    </ul>
                </p>

            </div>

            <div class="oshop-project project">

                <h3 class="project__title">
                    Oshop
                </h3>

                <p class="project__technos">
                    HTML, CSS, POO PHP, Composer
                </p>

                <p class="project__presentation"> Site factice de vente de chaussures</p>

                <p class="project__tasks">
                    <ul>
                        <li>Intégration et fonctionnalités front (Tri et affichage des produits par catégories)</li>
                        <li>Création et gestion du back (architecture MVC, CRUD)</li>
                        <li>Gestion de l'authentification et de la sécurité (ACL, Token) </li>
                        <li>Gestion du router (Altorouter)</li>
                    </ul>
                </p>

            </div>

        </section>

        <section class="experience experience-bank">

            <h2 class="experience__title">Conseillère clientèle particulier <br> 2006-2020 </h2>

            <p class="experience__tasks">
                <ul>
                    <li>Veille nouveautés application et tablette collaborateur</li>
                    <li>Développement de l'utilisation du digital au sein des agences</li>
                    <li>Accueil clientèle particuliers et professionnels</li>
                    <li>Gestion, développement et fidélisation portefeuille clients particuliers</li>
                    <li>Analyse des besoins et conseils financiers selon appétences</li>
                    <li>Traitement des urgences et gestion des conflits</li>
                </ul>
            </p>

        </section>

    </div>
</template>

<script>
export default {

    name: 'Experiences',

}
</script>

<style scoped lang="scss">

@import "~@/assets/scss/main.scss";

.experiences {

    padding: 1.2rem;

    &>h1 {
       @include title-page;
    }

    .experience {

        &__title {
            margin: 1.5rem 0.5rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-weight: bold;
            text-align: center;
        }

        .project {
            margin: 2rem 1rem 4rem 1rem;

            &__title {
                font-family: 'ArialBold';
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
                    // padding: 0.5rem;
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
            }

            &__presentation {
                @include paragraph-page;

            }

            &__tasks {
                margin-top: 1rem;
                line-height: 1.2rem;

                &>ul {
                    list-style: disc inside;
                }
            }


        }

        &-bank {
            margin: 2rem 1rem 4rem 1rem;
        }

        &__tasks {
             margin-top: 1rem;
                line-height: 1.2rem;

                &>ul {
                    list-style: disc inside;
                }
        }
    }
}

@include screen-medium {

    .experiences {
        .experience {
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
}

</style>