import React from 'react'
import StyledComponentHeader from './styles';
import HeaderMenu from './Menu/index';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
    return(
        <StyledComponentHeader>
            <HeaderMenu/>
            <Logo/>
            <SearchBar />
        </StyledComponentHeader>
    )
}

export default Header;