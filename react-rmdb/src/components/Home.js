import React,{ useState,useEffect} from 'react';

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

import NoImages from '../images/no_image.jpg';

import api from '../API';



const Home = () => {
    //state for holding movies
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
        try{
            setError(false);
            setLoading(true);

            const movies = await api.fetchMovies(searchTerm,page);

            setState(prev =>({
                ...movies,
                results:
                page > 1 ? [...prev.results,...movies.results] : [...movies.results]
            }))

        }catch(error){
            setError(true);
        }
        setLoading(false)
    }

    
    //initial render
    useEffect(()=>{
        fetchMovies(1)
    },[])
    //array: dependencies for when the useEffect is triggered
    //when empty it will only run once 
    console.log(state)



    return<div>home page</div>
}

export default Home;