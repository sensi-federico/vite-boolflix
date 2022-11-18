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

        <nav class="d-flex align-items-center justify-content-between">
            <!-- left-bar + logo -->
            <div class="logo d-flex align-items-center ps-5">
                <img class="me-3" src="../../public/img/Boolflix.png" alt="">
                <div class="item ps-2 ">
                    <a href="#">Home</a>
                    <a href="#">Serie TV</a>
                    <a href="#">Film</a>
                    <a href="#">Originali</a>
                    <a href="#">Aggiunti di recente</a>
                    <a href="#">La mia lista</a>
                </div>
            </div>
            <!-- barra di ricerca -->
            <div class="search-bar pe-5 d-flex align-items-center">
                <input type="text" v-model="store.query" @keyup.enter="store.callApi(store.query)">
                <button class="m-2 btn p-2 rounded-0" @click="store.callApi(store.query)">
                    <i class="fa-solid fa-magnifying-glass"></i></button>
                <div>
                    <i class="fa fa-bell ms-2" aria-hidden="true"></i>
                    <i class="fa fa-user-circle ms-4" aria-hidden="true"></i>
                </div>
            </div>
        </nav>
        <!-- slider -->
        <div class="slider">
            <img :src="store.slides[store.activeImage].thumb" alt="">
            <img :src="store.slides[store.activeImage].logo" alt="" class="logoSeries">
            <div class="commands">
                <div class="btn play">
                    <i class="fa fa-play" aria-hidden="true"></i>
                    Riproduci
                </div>
                <div class="btn info">
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                    Altre info
                </div>
            </div>
        </div>

    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">
.slider {

    height: 700px;

    img {
        width: 100%;
        height: 700px;
        object-fit: cover;
    }

    .logoSeries {
        width: 400px;
        height: 300px;
        position: relative;
        left: 2rem;
        top: -30rem;
        object-fit: contain;
    }

    .commands {

        height: 0;

        .btn {
            position: relative;
            top: -30rem;
            padding: .6rem;
            left: 3rem;
            scale: 1.2;
        }

        .play {
            background-color: white;
            color: black;
            border-radius: .2rem;
        }

        .info {
            color: white;
            background-color: rgba(211, 211, 211, 0.548);
            border-radius: .2rem;
            margin-left: 2rem;
        }

    }
}

.logo {
    img {
        width: 120px;
        height: 30px;
    }
}

.search-bar {
    margin-top: 1rem;

    input {
        border: .2px solid red;
        padding: .2rem;
        outline: 0;
        background-color: black;
        color: white;
    }

    button {
        padding: .2rem;
        color: white;

        &:hover {
            background-color: red;
        }
    }
}

nav {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.591);
    position: fixed;
    z-index: 100;

    a {
        text-decoration: none;
        color: rgba(230, 230, 230, 0.8);
        margin-right: 1rem;

        &:hover {
            color: white;
        }
    }
}
</style>