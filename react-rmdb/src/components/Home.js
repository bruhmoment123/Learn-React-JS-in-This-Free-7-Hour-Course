import React,{ useState,useEffect} from 'react';

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

import NoImages from '../images/no_image.jpg';




const Home = () => {
    //state for holding movies
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return<div>home page</div>
}

export default Home;