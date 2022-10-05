import React from 'react';

//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Image
import NoImage from '../images/no_image.jpg';

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Button from './Button'

const Home = () => {
    const {state,loading, error,setSearchTerm,searchTerm,setIsLoadingMore} = useHomeFetch();
    
    if(error) return <div>Something went wrong...</div>

    return (
        //fragments: since you can only return one parent element in react, this can be
        //used to arounnd the elements if a div cant be used to wrap around
        <>
        {!searchTerm && state.results[0]? 
        ( <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        /> )
        : null
        }
        <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie=>(
                    <Thumb 
                    key={movie.id} 
                    movieId={movie.id}
                    clickable //default to true
                    image={
                        movie.poster_path ?
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    
                    />
                ))}
            </Grid>
            {loading && <Spinner/>}
            {
                state.page < state.total_pages && !loading && (
                    //it wont re-render anymore after a couple more times because react knows the same value is being given
                    <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
                )
            }
        </>
    );
}

export default Home;