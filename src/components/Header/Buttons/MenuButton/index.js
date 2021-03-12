import {compose,withState,withProps,withHandlers} from 'recompose';
import selectCurrentPage from '../../../../redux/navigation/selectors/select-current-page';
import MenuButton from './component';


const MenuButtonContainer=({id,uri,label,currentPage})=>{
    return compose(
            withProps({
                uri: uri,
                label:label,
            }),
            
            withState('active','setActive',false),
            withHandlers({
                clicked:({setState})=>()=>{
                    setState(state=>!state);
                    
                }
            })
        )(MenuButton)
}


