import {pathOr} from 'ramda'; 


const selectNavLinks= pathOr([],["navigation","links"]);
export default selectNavLinks;