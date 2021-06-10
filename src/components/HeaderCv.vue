<template>
    <header class="header-cv">
        <div class="info info-general">
            <h1 class="info__job"> Développeuse </h1>
            <h2 class="info__job2"> web et mobile </h2>
            <span class="info__stack"> Fullstack </span>

            <span class="info__name"> Amandine Floucaut </span>
            <span class="info__location"> Caden - Bretagne </span>
        </div> <!-- End info-->

        <!-- <div > -->
        <img src="../assets/images/photo_cv_amandinefloucaut.png" alt="Photo Amandine Floucaut" class="photo-cv">
        <!-- </div> -->

        <div class="info-bubbles bubble">

            <img src="../assets/images/bubble_name.png" alt="" class="bubble__name">

            <img src="../assets/images/bubble_age.png" alt="" class="bubble__age">

            <img src="../assets/images/bubble_heart.png" alt="" class="bubble__heart">

        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderCv',

    //WIP image aléatoire pour .bubble_heart
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
    padding: 1rem 1rem 0 1rem;

    background-image: url("~@/assets/images/image_fond_nuage.png");

    span {
        display: block;
    }

    .info {

        &__job {
            font-family: 'Lobster';
            font-weight: 700;
            font-size: 1rem;
            margin: 1.5rem 0 0.5rem 0;
        }

        &__job2 {
            font-family: 'Matiz';
            font-weight: 900;
            font-size: 0.7rem;

        }

        &__stack {
            font-family: 'AbrahamLincoln';
            font-size: 0.7rem;
            margin-top: 1.5rem;
        }

        &__name {
            font-family: 'AbrahamLincoln';
            font-size: 0.8rem;
            margin-top: 2rem;
        }

        &__location {
            font-family: 'MrDafoe';
            font-size: 0.5rem;
        }
    }

    .photo-cv{
        width: 60%;
        // &>img {
        //     width: 100%;
        // }
    }
    .bubble {

        &>img {
            width: 100%;
        }

        &__name {

            &>span {

                &:first-child {
                    font-family: 'Matiz';
                }

                &:last-child {
                    font-family: 'Lobster';
                }
            }
        }

        &__age {
            font-family: 'MrDafoe';
        }
    }
}



</style>