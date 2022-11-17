<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.autoPlay()
    }
}

</script>

<template>

    <AppHeader />
    <AppMain />
    <AppFooter />

</template>

<style lang="scss">

</style>
