<template>

    <nav class="contact">

        <div class="contact-infos phone">
            <a href="#contact-page" class="contact--info"> {{phone}} </a>
        </div>

        <div class="contact-infos mail">
            <a href="#contact-page" class="contact--info"> {{mail}} </a>
        </div>

        <div class="contact-infos linkedin">
            <a href="https://www.linkedin.com/in/amandine-floucaut-64a85ba3/" class="contact--info"> {{linkedin}} </a>
        </div>


        <div class="contact-infos github">
            <a href="https://github.com/AmandineFloucaut" class="contact--info"> {{github}} </a>
        </div>

    </nav>
</template>

<script>

export default {

    name: 'Banner',

    props: {

        phone: {
            type: String,
            default: '06 43 02 01 99'
        },

        mail: {
            type: String,
            default: 'afloucaut@gmail.com'
        },

        linkedin: {
            type: String,
            default: 'Profil Linkedin'
        },

        github: {
            type: String,
            default: 'Compte Github'
        }

    },

    data() {
        return {

        }
    }

    //TODO clique sur #phone : ouverture automatique appel sur mobile
    //TODO clique sur #mail : proposition ouverture boite mail
}

</script>

<style scoped lang="scss">

@import '~@/assets/scss/main.scss';

.contact {

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.3rem;
    background-color: $dark-grey;
    color: $beige;

    .phone {
        display: none;
    }

    &-infos {

        display: flex;
        align-items: center;
        font-size: 0.8rem;
        margin-left: 0.3rem;

        &>a {
            color: $beige;
            text-decoration: none;
            font-family: 'Amatic';
        }
    }

    &-icon {
        width: 1rem;
    }

     &--info {
        margin-left: 0.2rem;
    }
}

//TODO Medias queries

@include screen-small {

    .contact {
        .phone {
            display: block;
        }
    }
}

@include screen-medium {

    .contact {

        &-infos {
            font-size: 1.2rem;
            margin-left: 0rem;
        }

        &-icon {
            width: 1.3rem;
        }

        &--info {
            margin-left: 0.3rem;
        }
    }
}

@include screen-extra-large {

    .contact {

        &-infos {
            font-size: 1.5rem;
        }

        &-icon {
            width: 1.8rem;
        }

    }
}

@include screen-huge {
    .contact {
        &-infos {
            font-size: 1.5rem;
        }

        &-icon {
            width: 1.8rem;
        }
    }
}

</style>