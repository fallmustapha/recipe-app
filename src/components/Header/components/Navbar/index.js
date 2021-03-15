import {compose,branch,renderNothing} from 'recompose';
import {connect} from 'react-redux';
import {isEmpty,pathOr} from 'ramda';
import {isNilOrEmpty} from 'ramda-adjunct'

import selectNavLinks from '../../../../redux/navigation/selectors/select-nav-links';
import Navbar from './component'
//const hasNoLinks=isEmpty(pathOr([],["navigation","links"]));
const hasNoLinks=({links})=>isNilOrEmpty(links);
const mapStateToProps=(state)=>{
    return{
        links:selectNavLinks(state),
        brand:"My App2"
    }
};
const NavbarContainer=compose(
    connect(mapStateToProps),
    branch(hasNoLinks,renderNothing)
)(Navbar);
export default NavbarContainer;
