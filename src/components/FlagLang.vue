<script>
import { store } from '../store.js'

export default {
    name: 'FlagLang',
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
    <img :src="store.search(movie.original_language)" :alt="movie.origina_language" class="mb-2">
    <p>{{ movie.original_language }}</p>
</template>

<style lang="scss">
img {
    width: 20px;
    float: left;
}

p {
    margin-bottom: .5rem;
    padding-left: .5rem;
}
</style>