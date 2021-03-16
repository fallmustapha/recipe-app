import {compose,branch,renderNothing,lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {isEmpty,pathOr} from 'ramda';
import {isNilOrEmpty} from 'ramda-adjunct'

import {fetchNavLinks} from '../../../../redux/actions'
import selectNavLinks from '../../../../redux/navigation/selectors/select-nav-links';
import Navbar from './component'
const hasNoLinks=({links})=>isNilOrEmpty(links);
const mapStateToProps=(state)=>{
    return{
        links:selectNavLinks(state),
        brand:"My App2"
    }
};
const mapDispatchToProps = {
        fetchNavLinks
    
}
const NavbarContainer=compose(
    connect(mapStateToProps,mapDispatchToProps),
    
    lifecycle({
        componentDidMount(){
            const {fetchNavLinks:fetchNavLinksProp}=this.props;
            fetchNavLinksProp()
        }
    }),
    branch(hasNoLinks,renderNothing)
)(Navbar);
export default NavbarContainer;
