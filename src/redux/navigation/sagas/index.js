import {takeEvery} from "redux-saga/effects";
import { FETCH_NAV_LINKS } from "../../actions";
import fetchNavigationLinks from "./fetch-navigation-links";


export default function* navigationSagas(){
    yield takeEvery(FETCH_NAV_LINKS,fetchNavigationLinks);
}