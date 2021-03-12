import {pathOr} from 'ramda';

const selectCurrentPage=pathOr([],['navigation','currentPage']);
export default selectCurrentPage;