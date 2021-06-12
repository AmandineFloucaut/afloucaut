<template>

    <nav class="contact">

        <div class="contact-infos address">
            <a href=""><img src="~@/assets/images/icon-address.png" alt="" class="contact-icon"></a>
            <a href="#contact-page" class="contact--info"> {{address}} </a>
        </div>

        <div class="contact-infos phone">
            <a href=""><img src="~@/assets/images/icon-tel.png" alt="" class="contact-icon"></a>
            <a href="#contact-page" class="contact--info"> {{phone}} </a>
        </div>

        <div class="contact-infos mail">
            <a href=""><img src="~@/assets/images/icon-mail.png" alt="" class="contact-icon"></a>
            <a href="#contact-page" class="contact--info"> {{mail}} </a>
        </div>

        <div class="contact-infos github">
            <a href=""><img src="~@/assets/images/icon-github.png" alt="" class="contact-icon"></a>
            <a href="https://github.com/AmandineFloucaut" class="contact--info"> {{github}} </a>
        </div>

    </nav>
</template>

<script>

export default {

    name: 'Banner',

    props: {

        address: {
            type: String,
            default: '2 rue du calvaire, 56220 Caden',
        },

        phone: {
            type: String,
            default: '06 43 02 01 99'
        },

        mail: {
            type: String,
            default: 'afloucaut@gmail.com'
        },

        github: {
            type: String,
            default: 'https://github.com/AmandineFloucaut'
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

    .address {
        display: none;
    }

    .phone {
        display: none;
    }

    &-infos {

        display: flex;
        align-items: center;
        font-size: 0.8rem;
        font-family: 'Amatic';
        margin-left: 0.3rem;

        &>a {
            color: $beige;
            text-decoration: none;
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
        .address {
            display: block;
        }
    }

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