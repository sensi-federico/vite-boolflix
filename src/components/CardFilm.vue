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
    }
}

</script>

<template>

    <div class="col">
        <div class="card">
            <p class="text-black">{{ movie.title }}</p>
            <p class="text-black">{{ movie.original_title }}</p>
            <p class="text-black">{{ movie.original_language }}</p>
            <p class="text-black">{{ movie.vote_average }}</p>
        </div>
    </div>

</template>

<style>

</style>