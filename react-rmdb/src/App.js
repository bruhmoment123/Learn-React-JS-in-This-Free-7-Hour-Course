import React from 'react';

//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'
import NotFound from './components/NotFound'
import Login from './components/Login';


//Context
import UserProvider from './context';


import {GlobalStyle} from './GlobalStyles';

const App =() => (
  (
    <Router>
      <UserProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        {/* any path that don't exist  */}
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <GlobalStyle />
      </UserProvider>

    </Router>
  )
)

export default App;
