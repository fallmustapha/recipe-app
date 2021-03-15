import navReducer from '../navigation/reducers';
import recipesReducer from '../recipees/reducers'
import {combineReducers} from 'redux'
const globalReducer=combineReducers(
    {
        navigation:navReducer,
        recipes:recipesReducer
    }
)
export default globalReducer;