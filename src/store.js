import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    activeImage: 0,
    intervalId: null,

    slides: [

        {
            thumb: '../public/img/daredevil.png',
            logo: '../public/img/daredevil-logo.png'
        },
        {
            thumb: '../public/img/dark.png',
            logo: '../public/img/dark-logo.png',
        },
        {
            thumb: '../public/img/the-witcher.png',
            logo: '../public/img/Witcher-logo.png',
        },
        {
            thumb: '../public/img/mr-robot.png',
            logo: '../public/img/mr-robot-logo.png',
        },
        {
            thumb: '../public/img/how-i-met.png',
            logo: '../public/img/how-i-met-your-mother-logo.png',
        },
    ],

    error: null,
    movies: null,
    userInput: null,
    flags: {
        es: '../public/img/es.png',
        it: '../public/img/it.png',
        en: '../public/img/en.png',
        ja: '../public/img/ja.png',
    },
    thumbUrl: 'https://image.tmdb.org/t/p/original/',
    // chiamata api
    callApi(input) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: 'ed79b78c7740eb424b5c1339fa2fb154',
                query: input
            }
        }
        // chiamata axios
        axios(config)
            .then(response => {
                store.movies = response.data.results
                console.log(store.movies)
            })
            .catch(err => {
                console.log(err)
            })
    },
    // funzione ricerca lingua e sostituzione testo con bandiera (se possibile) 
    search(lang) {
        if (lang === 'en') {
            return store.flags.en
        } else if (lang === 'it') {
            return store.flags.it
        } else if (lang === 'es') {
            return store.flags.es
        } else if (lang === 'ja') {
            return store.flags.ja
        }
    },
    // funzione che genera stelle al posto del voto
    stars(vote) {
        return Math.ceil(vote)
    },
    // funzioni per slider
    nextSlide() {
        store.activeImage++
        if (store.activeImage === store.slides.length) {
            store.activeImage = 0
        }
    },
    autoPlay() {
        store.intervalId = setInterval(() => {
            store.nextSlide()
        }, 5000)
    }
})