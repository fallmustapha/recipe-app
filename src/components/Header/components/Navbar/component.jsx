import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { map } from 'ramda'
import {string,arrayOf,number} from "prop-types"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    primaryColor:{backgroundColor:"#c0ca33"}
  }));

const Navbar=({brand,links,})=>{
    const classes = useStyles();
    return (
    <AppBar position="relative" className={classes.primaryColor}>
        <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {brand}
                </Typography>
                {
                    map(link=>{
                        return <Button color="inherit">{link.label}</Button>  
                    },links)
                }
                
        </Toolbar>
    </AppBar>
    )
}
Navbar.prototype={
  links:arrayOf({
    label:string,
    id:number,
    uri:string
  })
}
Navbar.defaultProps={
  links:[]
}
export default Navbar;