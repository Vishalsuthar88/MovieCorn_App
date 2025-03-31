import React, { useEffect ,useState} from 'react'
import "./MovieList.css"
import { useParams } from 'react-router-dom'
import MovieCard from '../moviecard/MovieCard'



const MovieList = () => {
    const[movielist ,setMovielist]=useState([])
    const {type}=useParams()
    // useEffect(()=>{
    //     getData()
    // },[])

    useEffect(()=>{
        getData()
    },[type])
    
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=d8142d6f48f6c7a3cd27705d8097244a&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovielist(data.results))
    }
  return (
    <div className="movie_list">
        <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>

    
    <div className="list_cards">{
        movielist.map(movie=>(
                <MovieCard key={movie.id} movie={movie}/> 
        ))
}
    </div>
    </div>

  )
}

export default MovieList