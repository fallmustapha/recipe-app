
export const FETCH_NAV_LINKS= "FETCH_NAV_LINKS";
export const FETCH_NAV_LINKS_SUCCESS= "FETCH_NAV_LINKS_SUCCESS";

export const fetchNavLinks=()=>({
    type:FETCH_NAV_LINKS
})
export const fetchNavLinksSuccess=(links)=>({
    type:FETCH_NAV_LINKS_SUCCESS,
    payload: links
}) 