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

    <div class="container">
        <div class="row row-cols-1 row-cols-sm-5 g-3">
            <CardFilm :movie="movie" v-for="movie in store.movies" />
        </div>
    </div>

</template>

<style>

</style>