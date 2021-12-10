<template>
    <div id="nav" class="nav">
        <router-link to="/" class="nav__link"> {{link_1}} </router-link>
        <router-link to="/a-propos" class="nav__link"> {{link_2}} </router-link>
        <router-link to="/experiences" class="nav__link"> {{link_3}} </router-link>
        <router-link to="/competences" class="nav__link"> {{link_4}} </router-link>
        <router-link to="/formations" class="nav__link"> {{link_5}} </router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav',

    props: {
        link_1: {
            type: String,
            default: 'Home'
        },
        link_2: {
            type: String,
            default: 'A propos'
        },
        link_3: {
            type: String,
            default: 'Expériences'
        },
        link_4: {
            type: String,
            default: 'Compétences'
        },
        link_5: {
            type: String,
            default: 'Formations'
        }
    },

    data(){
        homeLinkClass: 'router-link-active, router-link-exact-active';
    },
}
</script>

<style scoped lang='scss'>

@import '~@/assets/scss/main.scss';

.nav {
    padding: 0.5rem;
    background-color: $dark-grey;
    display: flex;
    justify-content: space-around;

    &__link {
        margin: 0 0.5rem;
        font-family: 'Amatic';
        color: $beige;
    }

    .router-link-active,
    .router-link-exact-active {
        font-weight: bold;
    }
}

@include screen-medium {
    .nav {
        &__link {
            font-size: 1.5rem;
        }
    }
}

@include screen-extra-large {
    .nav {
        &__link {
            font-size: 1.8rem;
        }
    }
}
</style>