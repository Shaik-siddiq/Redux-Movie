import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/moviedetails/MovieDetails';
import PageNotFound from './components/pagenotfound/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <div className='container'>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/movie/:imdbID" element={<MovieDetails />} />
       <Route element={<PageNotFound />} />
     </Routes>
     </div>
     <Footer></Footer>
     </BrowserRouter>
    </>
  );
}

export default App;
