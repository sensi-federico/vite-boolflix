<script>
import { store } from '../store.js'

export default {
    name: 'CardFilm',
    props: {
        movie: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <div class="col">
        <div class="card">

            <!-- thumb film -->
            <div class="img-none" v-if="movie.poster_path === null">
                Img not found
            </div>
            <img class="thumb" :src="store.thumbUrl + movie.poster_path" alt="" v-else>

            <!-- info sul film -->
            <div class="info">
                <h6 class="m-0">Titolo:</h6>
                <p>{{ movie.title }}</p>

                <h6 class="m-0">Titolo Originale:</h6>
                <p>{{ movie.original_title }}</p>

                <div class="lang d-flex align-items-center">
                    <h6 class="mb-2 me-2">Lingua Originale:</h6>
                    <img :src="store.search(movie.original_language)" :alt="movie.origina_language" class="mb-2">
                    <p>{{ movie.original_language }}</p>
                </div>

                <div class="vote">
                    <h6>Voto:</h6>
                    <img src="/img/netflix.png" alt="" v-for="star in store.stars(movie.vote_average / 2)">
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss">

</style>