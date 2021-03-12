import React from "react"
import { NavLink } from "./styles"
import {string} from "prop-types";

const MenuButton=({label,uri})=>{
    return (
    <NavLink href={uri}>{label}</NavLink>
    )
}
MenuButton.propTypes={
    label:string,
    uri:string
}
MenuButton.defaultProps={
    label:null,
    uri:"#"
}
export default MenuButton;