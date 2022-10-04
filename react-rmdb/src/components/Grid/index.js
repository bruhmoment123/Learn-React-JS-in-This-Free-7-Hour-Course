import React from 'react';
import PropTypes from 'prop-types';


import {Wrapper,Content} from './Grid.styles';


//children is a default prop
//things nested in a component can be accessed through children
const Grid = ({header,children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

Grid.propTypes={
    header:PropTypes.string,
}

export default Grid;