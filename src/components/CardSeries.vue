<script>
import { store } from '../store.js'

export default {
    name: 'CardSeries',
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
            <div class="info text-center pt-3">
                <h6 class="m-0">Titolo:</h6>
                <p>{{ movie.name }}</p>
                <!-- sezione titolo originale-->
                <h6 class="m-0">Titolo Originale:</h6>
                <p>{{ movie.origial_name }}</p>
                <!-- sezione lingua -->
                <div class="lang ">
                    <h6 class="mb-2 me-2">Lingua Originale:</h6>
                    <div class="flag d-flex align-items-center justify-content-center">
                        <img :src="store.search(movie.original_language)" :alt="movie.origina_language" class="mb-2">
                        <p>{{ movie.original_language }}</p>
                    </div>
                </div>
                <!-- sezione voto -->
                <div class="vote  d-flex flex-column text-start">
                    <h6>Voto:</h6>
                    <div class="stars-empty">
                        <i class="fa-regular fa-star" aria-hidden="true" v-for="slide in store.slides"></i>
                    </div>
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"
                            v-for="star in store.stars(movie.vote_average / 2)"></i>
                    </div>
                </div>
                <!-- sezione overview -->
                <div class="overview">
                    <h6>Overview:</h6>
                    <p>{{ movie.overview }}</p>
                </div>

            </div>

        </div>
    </div>

</template>

<style lang="scss">

</style>