<script>
import CardFilm from './CardFilm.vue'
import CardSeries from './CardSeries.vue'
import { store } from '../store.js'

export default {
    name: 'AppMain',
    components: {
        CardFilm,
        CardSeries
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
        <div class="container py-5">
            <h2 class="mb-3">Film e SerieTV</h2>
            <div class="row row-cols-1 row-cols-sm-5 g-1">
                <!-- componente che contiene markUp e style delle cards -->
                <CardSeries :movie="movie" v-for="movie in store.movies" />
            </div>
        </div>
    </main>
    <!-- /#site_main -->

</template>

<style>

</style>