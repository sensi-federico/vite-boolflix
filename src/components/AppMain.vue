<script>
import CardFilm from './CardFilm.vue'
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        CardFilm
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <main id="site_main">
        <div class="container py-4">
            <div class="row row-cols-1 row-cols-sm-5 g-3">
                <!-- componente che contiene markUp e style delle cards -->
                <CardFilm :movie="movie" v-for="movie in store.movies" />
            </div>
        </div>
    </main>
    <!-- /#site_main -->

</template>

<style>
#site_main {
    padding-top: 5rem;
}
</style>