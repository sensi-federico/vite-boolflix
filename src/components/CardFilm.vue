<script>
import { store } from '../store.js'
import FlagLang from './FlagLang.vue';

export default {
    name: 'CardFilm',
    components: {
        FlagLang
    },
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

            <img class="thumb" :src="store.thumbUrl + movie.poster_path" alt="">

            <h6 class="m-0">Titolo:</h6>
            <p>{{ movie.title }}</p>

            <h6 class="m-0">Titolo Originale:</h6>
            <p>{{ movie.original_title }}</p>

            <div class="div d-flex align-items-center">
                <h6 class="mb-2 me-2">Lingua Originale:</h6>
                <FlagLang :movie="movie" />
            </div>

            <p>{{ movie.vote_average }}</p>
        </div>
    </div>

</template>

<style lang="scss">
.card {
    color: black;

    .thumb {
        width: 100%;
        border-top-right-radius: .3rem;
        border-top-left-radius: .3rem;
    }
}
</style>