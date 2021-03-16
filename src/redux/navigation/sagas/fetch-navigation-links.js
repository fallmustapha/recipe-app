import {call,put} from 'redux-saga/effects'
import { fetchNavLinksSuccess } from '../../actions';

const getMockLinks=[
    {
        label:"Recipes",
        uri:"/"
    },
    {
        label:"Link2",
        uri:"link1"
    }
];

export default function* fetchNavigationLinks() {
    const data=getMockLinks;

    yield put(fetchNavLinksSuccess(data)) ;
}