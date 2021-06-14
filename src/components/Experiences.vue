<template>
<div class="experiences">
    <h1> Mes expériences </h1>

    <section class="experience experience-oclock">
        <img src="@/assets/images/logo-oclock.png" alt="Logo Ecole O'clock">
        <h2 class="experience__title"> 2020 - 2021 - Projets professionnels </h2>

        <div class="shabadabada-project project">
            <h3 class="project__title"> Lead dev Shabadabada - site de divertissement (blindtest) </h3>
            <p class="project__presentation">
                Shabadabada est un site de divertissement sur lequel les utilisateurs peuvent tester leurs connaissances musicales au travers de différents blind tests.
                Il a été réalisé au sein d'une équipe de 3 personnes, <a href="#github Solene"> Solène Pilliard </a> est à l'origine du projet. Ce projet a été réalisé en conditions réelles, sur une période de 3 semaines et demi. La proposition actuelle est le produit minimum viable (MVP), de nouvelles fonctionnalités telles que l'inscription et l'ajout de nouvelles catégories viendront le compléter prochainement
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

        <div class="oprofile-project">
            <h3 class="project__title">Oprofile - Site de partage de profils développeurs et projets</h3>
            <p></p>
            <ul>
                <li>Intégration et fonctionnalités front</li>
                <li>Architecture du back, approche SOLID</li>
                <li>Création plugin, custom routes</li>
                <li>Gestion de l'authentification et de la sécurité (JWT)</li>
            </ul>
            <p>Technos : WordPress, POO PHP, Composer, Vue.js, SASS, Axios, npm</p>
        </div>

        <div class="todolist-project">
            <h3 class="project__title">Todolist - Site de gestion de tâches et rappel </h3>
            <p></p>
            <ul>
                <li>Intégration et fonctionnalités front (création, modification, archive des tâches côté utilisateur)</li>
                <li>Création et gestion du back (architecture MVC, CRUD)</li>
            </ul>
            <p>Technos : HTML, CSS, POO PHP, Lumen, Composer, POO Javascript, Ajax</p>
        </div>

        <div class="oshop-project">
            <p></p>
            <h3 class="project__title">Oshop - site factice de vente de chaussures</h3>
            <ul>
                <li>ntégration et fonctionnalités front (Tri et affichage des produits par catégories)</li>
                <li>Création et gestion du back (architecture MVC, CRUD)</li>
                <li>Gestion de l'authentification et de la sécurité (ACL, Token) </li>
                <li>Gestion du router (Altorouter)</li>
            </ul>
            <p>Technos : HTML, CSS, POO PHP, Composer</p>
        </div>

    </section>

    <section>
        <img src="@/assets/images/logo-bpgo.png" alt="logo BPGO">
        <h2>2006 - 2020 Conseillère clientèle particulier </h2>
        <img src="@/assets/images/logo-bnp-paribas.png" alt="logo Bnp Paribas">
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



</style>