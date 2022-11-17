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
    <img :src="store.flagFinder(movie.original_language)" alt="" class="mb-2">
</template>

<style lang="scss">
img {
    width: 20px;
}
</style>