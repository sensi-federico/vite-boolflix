import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    error: null,
    films: null,

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
                store.films = response.data.results
                console.log(store.films)
            })
            .catch(err => {
                console.log(err)
            })
    }
})
