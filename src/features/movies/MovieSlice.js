import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { APIKey } from '../../common/apis/MovieApiKey' 
import MovieApi from '../../common/apis/MovieApi'

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow: {},
}
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
async()=>{
    const movieText = 'Harry'
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    return response.data
}
)
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncMovies',
async()=>{
    const showText = 'Friends'
    const res = await MovieApi.get(`?apikey=${APIKey}&s=${showText}&type=series`)
    console.log(res.data)
    return res.data
}
)
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );
const MovieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>console.log("pending"),
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched Sucessfully")
           return {...state, movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>console.log("error"),
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched Sucessfully")
           return {...state, shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
          },
    }
})

export const {addMovies} = MovieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies
export const getAllShows = (state)=>state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default MovieSlice.reducer;