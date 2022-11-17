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



    <header id="site_header">
        <div class="slider">
            <img :src="store.slides[store.activeImage]" alt="">
        </div>
        <nav class="d-flex flex-column align-items-center justify-content-between">
            <!-- logo -->
            <div class="logo">
                <img src="../../public/img/Boolflix.png" alt="">
            </div>
            <!-- barra di ricerca -->
            <div class="search-bar">
                <input type="text" v-model="store.userInput" @keyup.enter="store.callApi(store.userInput)">
                <button class="m-2 btn" @click="store.callApi(store.userInput)">Search</button>
            </div>
        </nav>
    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">
.slider {

    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
}

.logo {
    img {
        width: 300px;
        height: 100px;
        margin-bottom: 1rem;
    }
}

.search-bar {
    margin-top: 1rem;

    input {
        border: 2px solid red;
        padding: .2rem;
        outline: 0;
    }

    button {
        padding: .2rem;
        color: white;
        background-color: red;

        &:hover {
            background-color: red;
        }
    }
}

nav {
    width: 100%;
    position: relative;
    top: -22rem;
}
</style>