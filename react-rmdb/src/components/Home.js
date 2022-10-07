import React,{Component}from 'react';

//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Image
import NoImage from '../images/no_image.jpg';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Button from './Button'

//API
import api from '../API';

const initialState = {
    page:0,
    results:[],
    total_pages:0,
    total_results:0,

}

class Home extends Component {

    state = {
        movies:initialState,
        searchTerm:'',
        isLoadingMore:false,
        loading:false,
        error:false
    };

    fetchMovies = async (page, searchTerm = '') => {
        try{
            this.setState({error:false,loadinng:true})

            const movies = await api.fetchMovies(searchTerm,page);

            this.setState(prev =>({
                ...prev,
                movies:{
                    ...movies,
                    results:page > 1 ? [...prev.movie.results,...movies.results] : [...movies.results]

                },
                loading:false
            }))

        }catch(error){
            this.setState({error:true,loading:false})
        }
    }

    handleSearch = searchTerm =>
        this.setState({movies:initialState,searchTerm},()=>
        this.fetchMovies(1,this.state.searchTerm)
        )
    
        handleLoadMore=()=>
        this.fetchMovies(this.state.movies.page+1,this.state.searchTerm)

    componentDidMount() {
        this.fetchMovies(1)
    }

    render(){

        const {searchTerm,movies,loading,error} = this.state;
        if(error) return <div>Something went wrong...</div>

    return (
        //fragments: since you can only return one parent element in react, this can be
        //used to arounnd the elements if a div cant be used to wrap around
        <>
        {!searchTerm && movies.results[0]? 
        ( <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
        title={movies.results[0].original_title}
        text={movies.results[0].overview}
        /> )
        : null
        }
        <SearchBar setSearchTerm={this.handleSearch}/>
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.results.map(movie=>(
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
                movies.page < movies.total_pages && !loading && (
                    //it wont re-render anymore after a couple more times because react knows the same value is being given
                    <Button text='Load More' callback={this.handleLoadMore}/>
                )
            }
        </>
    );
    }

    
    
}

export default Home;