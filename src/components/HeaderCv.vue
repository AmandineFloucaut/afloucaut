<template>
    <header class="header-cv">
        <div class="info info-general">
            <h1 class="info__job"> Développeuse </h1>
            <h2 class="info__job2"> web et mobile </h2>
            <span class="info__stack"> Fullstack </span>

            <span class="info__name"> Amandine Floucaut </span>
            <span class="info__location"> Caden - Bretagne </span>
        </div> <!-- End info-->

        <div class="photo-cv" >
        <img src="~@/assets/images/photo_cv_amandinefloucaut.png" alt="Photo Amandine Floucaut" >
        </div>

        <div class="info-bubbles bubble">
            <div class="bubble__name">
            <img src="~@/assets/images/bubble_name.png" alt="" class="bubble__name--image">
            </div>
            <div class="bubble__heart">
            <img src="~@/assets/images/bubble_heart.png" alt="" class="bubble__heart--image">
            </div>
            <div class="bubble__age">
            <img src="~@/assets/images/bubble_age.png" alt="" class="bubble__age--image">
            </div>
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

@import '~@/assets/scss/main.scss';

.header-cv {
    display: flex;
    justify-content: space-between;
    // height: 20%;
    padding: 1rem 1rem 0 1rem;

    background-image: url("~@/assets/images/image_fond_nuage.png");
    background-size: cover;

    span {
        display: block;
    }

    .info {

        flex-grow: 1;

        &__job {
            font-family: 'Lobster';
            font-weight: 700;
            font-size: 1rem;
            margin: 1rem 0 0.5rem 0;
        }

        &__job2 {
            font-family: 'Matiz';
            font-weight: 900;
            font-size: 0.6rem;

        }

        &__stack {
            font-family: 'AbrahamLincoln';
            font-size: 0.7rem;
            margin-top: 1rem;
        }

        &__name {
            font-family: 'AbrahamLincoln';
            font-size: 0.8rem;
            margin-top: 2rem;
        }

        &__location {
            font-family: 'MrDafoe';
            font-size: 0.5rem;
            margin-bottom: 0.5rem;
        }
    }

    .photo-cv{
        width: 60%;
        height: auto;
        text-align: end;

        &>img {
            width: 100%;
        }
    }

    .bubble {

        width: 20%;
        position: relative;

        &__name {
            width: 120%;
            position: absolute;
            left: -40px;

            &--image {
                width: 100%;
                display: block;
            }
        }

        &__heart {
            width: 80%;
            position: absolute;
            top: 20px;
            right: -10px;

            &--image {
                width: 100%;
                display: block;
            }
        }

        &__age {
            width: 100%;
            position: absolute;
            bottom: 50px;
            right: 10px;

            &--image {
                width: 100%;
                display: block;
            }
        }
    }
}



</style>