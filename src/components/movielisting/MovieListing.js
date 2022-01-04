import React from 'react'
import {useSelector} from 'react-redux'
import {getAllMovies,getAllShows} from '../../features/movies/MovieSlice'
import MovieCard from '../moviecard/MovieCard'
import './MovieListing.scss'  
const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    console.log(movies)
    let renderMovies,renderShows  = ""
    renderMovies= movies.Response === "True"?movies.Search.map((movie,index)=>{
        return(
        <MovieCard data={movie} key={index} />
        )
    }):<div><h3>{movies.Error}</h3></div>
    
    renderShows= shows.Response === "True"?shows.Search.map((show,index)=><MovieCard data={show} key={index} />):<div><h3>{shows.Error}</h3></div>
    return (
        <div className='wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
                <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {renderShows}
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default MovieListing
