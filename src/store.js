import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    error: null,
    movies: null,
    userInput: null,
    // flags: {
    //     lang: ['en', 'it', 'es', 'ja']
    // },
    // show: null,
    flags: {
        es: '../public/img/es.png',
        it: '../public/img/it.png',
        en: '../public/img/en.png',
        ja: '../public/img/ja.png',
    },

    callApi(input) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: 'ed79b78c7740eb424b5c1339fa2fb154',
                query: input
            }
        }
        axios(config)
            .then(response => {
                store.movies = response.data.results
                console.log(store.movies)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // flagFinder(lang) {

    //     for (let i = 0; i < store.flags.lang.length; i++) {
    //         if (store.flags.lang.includes(lang)) {
    //             store.show = true
    //             console.log('sono vero');
    //         } else {
    //             store.show = false
    //             console.log('sono falso');
    //         }
    //     }
    // }

    flagFinder(lang) {
        if (lang === 'en') {
            return store.flags.en
        } else if (lang === 'it') {
            return store.flags.it
        } else if (lang === 'es') {
            return store.flags.es
        } else if (lang === 'ja') {
            return store.flags.ja
        }
    }
})
