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
            thumb: '../public/img/black-mirror.png',
            logo: '../public/img/black-mirror-logo.png',
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
    query: null,
    flags: {
        es: '../public/img/es.png',
        it: '../public/img/it.png',
        en: '../public/img/en.png',
        ja: '../public/img/ja.png',
    },
    thumbUrl: 'https://image.tmdb.org/t/p/original/',

    // chiamata api doppia
    callApi(query) {
        this.movies = null;
        this.callAxios('https://api.themoviedb.org/3/search/movie?api_key=ab909735a57a0d14313842405a2fd07c&query=' + query)
        this.callAxios('https://api.themoviedb.org/3/search/tv?api_key=ab909735a57a0d14313842405a2fd07c&query=' + query)
    },
    // chiamata axios
    callAxios(call) {
        axios.get(call)
            .then(function (response) {
                if (store.movies === null) {
                    store.movies = response.data.results
                } else {
                    response.data.results.forEach(element => {
                        store.movies.push(element)
                    });
                }
                console.log(store.movies);
            })
            .catch(function (error) {
                console.log(error);
            });
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