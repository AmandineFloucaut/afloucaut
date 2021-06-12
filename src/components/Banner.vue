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
    padding: 0.2rem;
    background-color: $dark-grey;
    color: $beige;

    &-icon {
        width: 1rem;
    }

    .contact-infos {

        display: flex;
        font-size: 0.8rem;
        font-family: 'Amatic';
        margin-left: 0.3rem;

        &>a {
            color: $beige;
        }
    }

     &--info {
        margin-left: 0.2rem;
    }
}

</style>