import {call} from 'redux-saga/effects'

const getMockLinks=[
    {
        label:"Link1",
        uri:"link1"
    },
    {
        label:"Link2",
        uri:"link1"
    }
];

export default function* fetchNavigationLinks() {
    return yield getMockLinks;
}