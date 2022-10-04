import React,{useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

//Images
import searchIcon from '../../images/search-icon.svg';

//Styles
import {Wrapper, Content} from './SearchBar.styles';

/*
controlled component:
a component controlled by react
state gives the input's value and the input value changes as the state changes 
this is so that we know the state is in sync with input field 
*/ 
const SearchBar = ({setSearchTerm})=>{
    const [state, setState] = useState('');
    //mutable and won't trigger a re-renderr
    const initial = useRef(true);
    

    //this is used so that there will be a slight delay between searching a movie and returning the results 
    useEffect(()=>{
        //so that it won't trigger when mounting 
        if(initial.current){
            initial.current=false;
            return;
        }

        const timer = setTimeout(()=>{
            setSearchTerm(state)
        },500)

        //to rid of timers that are created after each render 
        return ()=> clearTimeout(timer)
    },[setSearchTerm,state])

    return(
        <Wrapper>
            <Content>

                <img src={searchIcon} alt='search-icon'/>
                <input 
                type='text'
                placeholder='Search Movie'
                /*
                a inline function is used because we don't want the function to be called instantly 
                this only calls the function when we type into the input field 
                 */
                onChange={
                    e=>setState(e.currentTarget.value)
                }
                value={state}
                />

            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes={
    callback: PropTypes.func
}

export default SearchBar;