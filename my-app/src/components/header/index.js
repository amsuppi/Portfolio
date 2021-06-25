import React from 'react'
import StyledComponentHeader from './styles';
import HeaderMenu from './Menu/index';
import Logo from './Logo';

const Header = () => {
    return(
        <StyledComponentHeader>
            <HeaderMenu/>
            <Logo/>
        </StyledComponentHeader>
    )
}

export default Header;