<template>
<div class="experiences">
    <h1> Mes experiences </h1>

    <section class="experience experience-oclock">
        <div class="experience__title">
            <img src="@/assets/images/logo-oclock.png" alt="Logo Ecole O'clock">
            <h2> 2020 - 2021 - Projets professionnels </h2>
        </div>

        <div class="shabadabada-project project">
            <h3 class="project__title">
                Lead dev Shabadabada <br>
                Site de divertissement (blindtest)
            </h3>
            <div class="project__images">

                <img src="@/assets/images/shabadabada-desktop.png" alt="">
                <img src="@/assets/images/shabadabada-mobile.png" alt="">
            </div>
            <p class="project__presentation">
                Shabadabada est un site de divertissement sur lequel les utilisateurs peuvent tester leurs connaissances musicales au travers de différents blind tests.
                Il a été réalisé au sein d'une équipe de 3 personnes. <a href="https://github.com/SolenePilliard"> Solène Pilliard </a> est à l'origine de ce projet qui a été réalisé en conditions réelles, sur une période de 3 semaines et demi en suivant la méthodologie Scrum. Nous avons décidé de continuer à faire vivre ce site, en venant l'implémenter de nouvelles fonctionnalités et nouvelles catégories. N'hésitez donc pas à le visiter régulièrement !
                Voici les différentes tâches que j'ai réalisée :
            </p>
            <ul>
                <li>Réalisation des wireframes, du cahier des charges et des documents relatifs à la base de données</li>
                <li>Création d'un plugin (Architecture Classes et Models)</li>
                <li>Automatisation des endpoints de l'Api Deezer pour l'import des données dans le back office</li>
                <li>Préparation des routes custom de l'Api Interne et des playlists aléatoires à envoyer au front</li>
                <li>Intégration (architecture du style avec SASS)</li>
                <li>Récupération des données et création des parties côté utilisateur</li>
                <li>Enregistrement des parties créees, puis jouées implémentées des réponses et scores de l'utilisateur</li>
            </ul>

            <p>Technos : WordPress, Api Externe, PHP, POO, Composer, Vue.js, SASS, Axios, npm, parcel</p>
        </div>

        <div class="oprofile-project project">
            <h3 class="project__title">
                Oprofile <br>
                Site de partage de profils développeurs et projets
            </h3>
            <p> Oprofile est un site fictif qui met en relation des clients avec des développeurs.Un thème Wordpress a été créé pour le front et un plugin pour la gestion du back.</p>
            <ul>
                <li>Intégration et fonctionnalités front</li>
                <li>Architecture du back, approche SOLID</li>
                <li>Création plugin, custom routes</li>
                <li>Gestion de l'authentification et de la sécurité (JWT)</li>
            </ul>
            <p>Technos : WordPress, POO PHP, Composer, Vue.js, SASS, Axios, npm</p>
        </div>

        <div class="todolist-project project">
            <h3 class="project__title">
                Todolist <br>
                Site de gestion de tâches et rappel
            </h3>
            <p></p>
            <ul>
                <li>Intégration et fonctionnalités front (création, modification, archive des tâches côté utilisateur)</li>
                <li>Création et gestion du back (architecture MVC, CRUD)</li>
            </ul>
            <p>Technos : HTML, CSS, POO PHP, Lumen, Composer, POO Javascript, Ajax</p>
        </div>

        <div class="oshop-project project">
            <p></p>
            <h3 class="project__title">
                Oshop <br>
                Site factice de vente de chaussures
            </h3>
            <ul>
                <li>ntégration et fonctionnalités front (Tri et affichage des produits par catégories)</li>
                <li>Création et gestion du back (architecture MVC, CRUD)</li>
                <li>Gestion de l'authentification et de la sécurité (ACL, Token) </li>
                <li>Gestion du router (Altorouter)</li>
            </ul>
            <p>Technos : HTML, CSS, POO PHP, Composer</p>
        </div>

    </section>

    <section class="experience experience-bank">
        <div class="experience__title">
            <img src="@/assets/images/logo-bpgo.png" alt="logo BPGO">
            <h2>2006 - 2020 Conseillère clientèle particulier </h2>
            <img src="@/assets/images/logo-bnp-paribas.png" alt="logo Bnp Paribas">
        </div>
        <p></p>
        <ul>
            <li>Veille nouveautés application et tablette collaborateur</li>
            <li>Développement de l'utilisation du digital au sein des agences</li>
            <li>Accueil clientèle particuliers et professionnels</li>
            <li>Gestion, développement et fidélisation portefeuille clients particuliers</li>
            <li>Analyse des besoins et conseils financiers selon appétences</li>
            <li>Traitement des urgences et gestion des conflits</li>
        </ul>
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

    margin-top: 1.5rem;

    &>h1 {
        font-family: 'Matiz';
        text-transform: uppercase;
        margin: 1rem 1rem;
        border-bottom: solid 3px $dark-grey;
    }

    .experience {

        // font-family: 'Arial';

        &__title {
            margin: 1.5rem 0.5rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-weight: bold;

            &>img {
                width: 20%;
            }

            &>h2 {
                font-family: 'ArialBold';
            }
        }

        .project {
            margin: 2rem 0.5rem;
            // font-family: 'Arial';

            &__title {
                margin: 1rem;
                padding: 0rem 0.5rem;
                font-family: 'ArialBold';
                font-size: 1.2rem;
            }

            &__images {

                &>img {
                    border: solid 5px $beige;
                    filter: grayscale(70%);
                    // margin: 1rem 0.5rem;
                }

                &>img:hover {
                    filter: grayscale(0);
                }

                &>:nth-child(1) {
                    width: 60%;
                    position: relative;
                }

                &>:nth-child(2) {
                    width: 20%;
                    position: absolute;
                    top: 50%;
                    right: 5%;
                }
            }
        }
    }
}

//  &>:nth-child(2) {
//                     width: 20%;
//                     position: absolute;
//                     top: 72%;
//                     right: 5%;
//                 }


</style>