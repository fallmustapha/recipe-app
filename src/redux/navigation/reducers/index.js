import { FETCH_NAV_LINKS, FETCH_NAV_LINKS_SUCCESS } from "../../actions"
import selectNavLinks from "../selectors/select-nav-links";


const navReducer=(state={},{type,payload})=>{
    switch(type){
        case FETCH_NAV_LINKS_SUCCESS:{
            return {
                ...state,
                navigation:{
                    ...state.navigation,
                    links:[...selectNavLinks(state),...payload]
                }
            };
        }
        default: return state;
    }
}
export default navReducer;