import React,{Component} from 'react';
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
class SearchBar extends Component{
    state = {value:''};
    timeout=null;
    
    componentDidUpdate(_,prevState){
        if(this.state.value !==  prevState.value){
            const {setSearchTerm} = this.props;

            clearTimeout(this.timeout)

            this.timer = setTimeout(()=>{
                const {value} = this.state;
                setSearchTerm(value)
            },500)
        }
    }

        
    render(){
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
                        e=>this.setState({value:e.currentTarget.value})
                    }
                    value={this.state.value}
                    />
    
                </Content>
            </Wrapper>
        )
    }
    
}

SearchBar.propTypes={
    callback: PropTypes.func
}

export default SearchBar;