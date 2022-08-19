import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles'

import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} alt="rmdb-logo"></LogoImg>
                </Link>

                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    );
};

export default Header;