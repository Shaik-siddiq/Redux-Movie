import {configureStore} from '@reduxjs/toolkit'
import MoviesReducer from './movies/MovieSlice'
export const store = configureStore({
    reducer:{
        movies:MoviesReducer,
    }
})