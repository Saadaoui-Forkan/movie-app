import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
// import MovieDetails from './components/MovieDetails'
import axios from "axios";


function App() {

  const [movies,setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    setMovies(res.data.results)
    setPageCount(300)
  }

  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setPageCount(300)
  }
  // console.log(movies);
  useEffect(()=> {
    getAllMovies()
  }, [])

  // search a movie
  const [searchMovie,setSearchMovie] = useState("")
  const handleChange = (title) => {
    setSearchMovie(title)
  }

  let searched = movies.filter(movie => movie.original_title.toLowerCase().includes(searchMovie.toLocaleLowerCase()))

  return (
    <div className="font color-body ">
      <NavBar 
        movies = {movies} 
        handleChange = { handleChange } 
        searchMovie = { searchMovie } 
        setSearchMovie = { setSearchMovie }
      />
      <Container>
            <MoviesList 
              searched = { searched }
              getPage = { getPage }
              pageCount = { pageCount }
            />

            {/* <MovieDetails /> */}
      </Container>
    </div>
  );
}

export default App;
