import React from 'react';
import {map} from 'ramda';
import {string,arrayOf,exact} from 'prop-types';
import { NavBar,Brand, Nav,NavItem  } from './styles';
import MenuButton from '../../Buttons/MenuButton/component';


const Navbar=({brand,links})=>{
    return (
    <NavBar>
            <Brand>{brand}</Brand>
            <Nav>
                {
                    map(link=>{
                        return (
                            <NavItem>
                            <MenuButton label={link.label} uri={link.uri}/>
                            </NavItem>
                        )
                    },links)
                }
            </Nav>
    </NavBar>
    )
}
NavBar.propTypes={
    brand:string,
    link: arrayOf(exact({
        label:string,
        uri:string
    }))
}
NavBar.defaultProps={
    brand:"No Brand",
    link: []
}
export default Navbar;