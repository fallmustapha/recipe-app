import Style from 'styled-components';

export const NavList=Style.ul({

});

export const Nav=Style.nav({
    float:'right',
    alignItems:'center',
    height:"auto",
    display:'flex',
    flexDirection:'row',
    width:"25%",
    justifyContent:'space-around'

})
export const NavBar=Style.div({
    backgroundColor:"transparent",
    height :"25px",
    padding:"10px",
    alignItems:"center"
})
export const Brand=Style.a({
    textDecoration:"none",
    display:"inline",
    fontFamily:"Verdana, Arial, Helvetica, sans-serif",
    fontSize:"20px",
    fontWeight:"bold",
    color:"#19F56C",
    margin:"0",
    float:"left"

})
export const NavItem=Style.div({
    display:"inline"
})
