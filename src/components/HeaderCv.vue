<template>
    <header class="header-cv">
        <div class="info info-general">
            <h1 class="info__job"> Développeuse </h1>
            <h2 class="info__job2"> web et mobile </h2>
            <span class="info__stack"> Fullstack </span>

            <span class="info__name"> Amandine Floucaut </span>
            <span class="info__location"> Caden - Bretagne </span>
        </div> <!-- End info-->

        <div class="info info-photo">
            <img src="../assets/images/photo_cv_amandinefloucaut.png" alt="Photo Amandine Floucaut">
        </div>

        <div class="info info-bulles">
            <div class="bulle bulle__name">
                <span> Amandine </span>
                <span> C'est moi </span>
            </div>
            <div class="bulle bulle__age">
                <span> 35 ans </span>
            </div>
            <div class="bulle bulle_heart">
                <i class="fas fa-heart"></i>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderCv',

    //WIP image aléatoire pour .bulle_heart
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">

@import '../assets/scss/main.scss';

.header-cv {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    span {
        display: block;
    }

    .info {

        &__job {
            font-family: 'Lobster';
            font-weight: 700;
            font-size: 3rem;
        }

        &__job2 {
            font-family: 'Matiz';
            // font-family: 'Catamaran';
            font-weight: 900;
            font-size: 4rem;
        }

        &__stack {
            font-family: 'AbrahamLincoln';
            font-size: 1.5rem;
        }

        &__name {
            font-family: 'AbrahamLincoln';
        }

        &__location {
            font-family: 'MrDafoe';
        }
    }
}

</style>