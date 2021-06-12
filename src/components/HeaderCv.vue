<template>
    <header class="header-cv">
        <div class="info info-general">
            <h1 class="info__job"> Développeuse </h1>
            <h2 class="info__job2"> web et mobile </h2>
            <span class="info__stack"> Fullstack </span>

            <span class="info__name"> Amandine Floucaut </span>
            <span class="info__location"> {{location}} </span>
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

    props: {
        location: {
            type: String,
            default: 'Caden - Bretagne'
        }
    },

    //TODO image aléatoire pour .bubble_heart
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
    justify-content: center;
    padding: 1rem 0.5rem 0 0.5rem;

    background-image: url("~@/assets/images/image_fond_nuage.png");
    background-size: cover;

    span {
        display: block;
    }

    .info {

        &__job {
            font-family: 'Lobster';
            font-weight: 400;
            font-size: 1.2rem;
            margin: 1rem 0 0.5rem 0;
        }

        &__job2 {
            font-family: 'Matiz';
            font-weight: 900;
            font-size: 0.8rem;

        }

        &__stack {
            font-family: 'AbrahamLincoln';
            font-size: 0.8rem;
            margin-top: 1rem;
        }

        &__name {
            font-family: 'AbrahamLincoln';
            font-size: 0.8rem;
            margin-top: 2rem;
        }

        &__location {
            font-family: 'MrDafoe';
            font-size: 0.6rem;
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

        &__name,
        &__heart,
        &__age {
            position: absolute;
        }

        &__name {
            width: 120%;
            left: -40px;

            &--image {
                width: 100%;
                display: block;
            }
        }

        &__heart {
            width: 80%;
            top: 25px;
            right: -7px;

            &--image {
                width: 100%;
                display: block;
            }
        }

        &__age {
            bottom: 50px;
            right: 10px;

            &--image {
                width: 100%;
                display: block;
            }
        }
    }
}


//==== MEDIAS QUERIES ====//

@include screen-small {

    .header-cv {

        .bubble {

            &__name {
                left: -40px;
            }

            &__heart {
                top: 50px;
                right: -5px;
            }
        }
    }
}

@media(min-width: 400px) {

    .header-cv {

        .photo-cv{
            width: 40%;
            height: auto;
        }

        .bubble {

            &__name {
                width: 90%;
                left: -30px;
            }

            &__heart {
                width: 60%;
                top: 45px;
                right: -10px;;
            }

            &__age {
                width: 70%;
                top: 100px;
            }
        }

        .info {

            &__job {
                margin-top: 1.5rem;
                font-size: 1.5rem;
            }

            &__job2 {
                font-size: 0.8rem;
            }

            &__stack {
                font-size: 0.8rem;
            }

            &__name {
                margin-top: 1rem;
                font-size: 0.9rem;
            }

            &__location {
                font-size: 0.7rem;
            }
        }
    }
}

@include screen-medium {

    .header-cv {

        .info {

            &__job {
                font-size: 2rem;
            }

            &__job2 {
                font-size: 2.5rem;
            }

            &__stack {
                font-size: 2rem;
            }

            &__name {
                font-size: 1.5rem;
                margin-top: 2rem;
            }

            &__location {
                font-size: 1rem;
            }
        }

        .photo-cv{
            width: 35%;
            height: auto;
        }

        .bubble {

            &__name {
                width: 70%;
                top: 20px;
                left: -40px;
            }

            &__heart {
                width: 40%;
                top: 55px;
                right: 10px;
            }

            &__age {
                width: 60%;
                top: 120px;
                right: 50px;
            }
        }
    }
}

@include screen-large {

    .header-cv {

        .photo-cv {
            width: 25%;
            height: auto;
        }

        .bubble {

            &__name {
                width: 60%;
                top: 20px;
                left: -20px;
            }

            &__heart {
                width: 30%;
                top: 55px;
                right: 10px;
            }

            &__age {
                width: 50%;
                top: 120px;
                right: 50px;
            }
        }
    }

}

@include screen-extra-large {

    .header-cv {

        justify-content: space-around;

          .info {

            &__job {
                font-size: 3rem;
                margin-top: 3rem;
            }

            &__job2 {
                font-size: 3.5rem;
            }

            &__stack {
                font-size: 2.5rem;
            }

            &__name {
                font-size: 2rem;
                margin-top: 3rem;
            }

            &__location {
                font-size: 1.5rem;
            }
        }

        .photo-cv {
            width: 30%;
            height: auto;
        }

        .bubble {

            &__name {
                width: 70%;
                top: 20px;
                left: -80px;
            }

            &__heart {
                width: 40%;
                top: 70px;
                right: 50px;
            }

            &__age {
                width: 60%;
                top: 180px;
                right: 100px;
            }
        }
    }
}

@media(min-width: 1500px) {

    .header-cv {

        .info {

            &__job {
                margin-top: 8rem;
            }

            &__name {
                margin-top: 4rem;
            }
        }

        .bubble {

            &__name {
                width: 65%;
                top: 20px;
                left: -150px;
            }

            &__heart {
                width: 35%;
                top: 90px;
                right: 100px;
            }

            &__age {
                width: 55%;
                top: 250px;
                right: 200px;
            }
        }
    }
}

@include screen-huge {

    .header-cv {

        .bubble {
            margin-top: 4rem;
        }
    }
}

</style>