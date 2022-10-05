import {useState, useEffect} from 'react';

//API
import api from '../API';

//helpers
import {isPersistedState} from '../helpers';

//initalState can be beneficial for whenever a reset is needed
const initialState = {
    page:0,
    results:[],
    total_pages:0,
    total_results:0,

}

export const useHomeFetch = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const  [isLoadingMore,setIsLoadingMore] = useState(false);


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

    
    //initial render and search
    useEffect(()=>{
        if(!searchTerm){
            const sessionState = isPersistedState('homeState');

            if(sessionState){
                console.log("grabbing from sessionStorage")
                setState(sessionState)
                return;
            }
        }
        console.log("grabbing from API")
        setState(initialState);
        fetchMovies(1,searchTerm);
    },[searchTerm])
    //array: dependencies for when the useEffect is triggered
    //when empty it will only run once

    //Load More
    useEffect(()=>{
        if(!isLoadingMore) return;

        fetchMovies(state.page+1,searchTerm);
        setIsLoadingMore(false);
    },
    [isLoadingMore,searchTerm,state.page])

    //Write to session Storage
    useEffect(()=>{
        if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state))
        },[searchTerm,state])
    
    return {state,loading,error,setSearchTerm,searchTerm,setIsLoadingMore};
}