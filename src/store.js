import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    error: null,
    movies: null,
    userInput: null,
    lang: null,
    image: '../../public/img/',
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
    }
})
