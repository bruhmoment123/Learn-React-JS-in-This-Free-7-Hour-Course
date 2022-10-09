import React,{useContext} from 'react';

import {Link} from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg'

//Context
import {Context} from '../../context';

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header = () => {
    const [user] = useContext(Context);

    return (
    <Wrapper>
        <Content>
            <Link to ='/'>
                <LogoImg src={RMDBLogo} alt="RMDBLogo" />
            </Link>
            {
                user ? (
                    <span >Logged in as: {user.username}</span>
                ) : (
                    <Link to='/login'>
                        <span>Login</span>
                    </Link>
                )
            }
            <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
        </Content>
    </Wrapper>
    )
}

export default Header;