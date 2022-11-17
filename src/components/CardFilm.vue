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

            <h6 class="m-0">Titolo:</h6>
            <p>{{ movie.title }}</p>

            <h6 class="m-0">Titolo Originale:</h6>
            <p>{{ movie.original_title }}</p>

            <div class="div d-flex align-items-center">
                <h6 class="mb-2 me-2">Lingua Originale:</h6>
                <FlagLang :movie="movie" v-if="store.show === true" />
                <p v-else>{{ movie.original_language }}</p>
            </div>

            <p>{{ movie.vote_average }}</p>
        </div>
    </div>

</template>

<style>
.card {
    color: black;
}
</style>