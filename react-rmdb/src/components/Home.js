import React,{ useState,useEffect} from 'react';

//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Image
import NoImages from '../images/no_image.jpg';

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch';



const Home = () => {
    const {state,loading, error} = useHomeFetch();

    console.log(state)

    return<div>home page</div>
}

export default Home;