import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;

    h1{
        color: var(--medGrey);

        @media screen and (max-width:768px){
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display:grid;
    //minmax is setting the minimum annd maximum width of the thumbnail
    //this also makes it responsive 
    /*
    This is responsive because we set the minmax so that the minimum width is 200px and so 
    it instead removes a column
    */
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap:2rem;

`;
