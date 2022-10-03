import React from 'react';

//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'
import NotFound from './components/NotFound'


import {GlobalStyle} from './GlobalStyles';

const App =() => (
  (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        {/* any path that don't exist  */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
  )
)

export default App;
