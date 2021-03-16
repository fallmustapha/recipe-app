import {createStore,applyMiddleware} from 'redux';
import globalReducer from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import initSagas from './sagas';
import createSagaMiddleware from "redux-saga";
import navigationSagas from '../navigation/sagas';
import navReducer from '../navigation/reducers';


const initState={
    navigation:{
        links:[
            {
                label:"Link1",
                uri:"link1"
            },
            {
                label:"Link2",
                uri:"link1"
            }
        ]
    },
    recipes:{
        items:[]
    }
}
export const sagaMiddleware=createSagaMiddleware();
const enhancerCompose = composeWithDevTools();
const rootEnhancer = enhancerCompose(sagaMiddleware);


const getStore=(initialState={})=>{
    const store= createStore(
        navReducer, initialState,composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(navigationSagas);
    return store;
}



export default getStore();