import { FETCH_NAV_LINKS } from "../../actions"


const navReducer=(state={},{payload,type})=>{
    switch(type){
        case FETCH_NAV_LINKS:{
            return state;
        }
        default: return state;
    }
}
export default navReducer;