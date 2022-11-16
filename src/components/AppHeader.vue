<script>
import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <header id="site_header" class="bg-dark d-flex align-items-center justify-content-between">
        <div class="logo">
            <h1 class="text-danger p-2">Boolflix</h1>
        </div>
        <div class="search-bar">
            <input type="text" v-model="store.userInput" @keyup.enter="store.callApi(store.userInput)">
            <button class="m-2" @click="store.callApi(store.userInput)">Search</button>
        </div>
    </header>
    <!-- /#site_header -->

</template>

<style>

</style>