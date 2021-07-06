<template>
    <div id="nav" class="nav">
        <router-link to="/" class="nav__link"> Home </router-link>
        <router-link to="/a-propos" class="nav__link"> A propos </router-link>
        <router-link to="/experiences" class="nav__link"> Expériences </router-link>
        <router-link to="/competences" class="nav__link"> Compétences </router-link>
        <router-link to="/formations" class="nav__link"> Formations </router-link>
    </div>
</template>

<script>
export default {
    name: 'Nav',

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