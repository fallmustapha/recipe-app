import Style from 'styled-components';


export const NavLink=Style.a({
    textDecoration:"none",
    display:"inline",
    fontSize:"18px",
    fontFamily:"Verdana, Arial, Helvetica, sans-serif",
    fontWeight:"10",
    color:"#009DFC",
    "&:hover":{
        color:"#B0C1CB"
    }
})
