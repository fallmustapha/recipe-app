
export const MENU_BUTTON_CLICKED='MENU_BUTTON_CLICKED';

export const menuButtonClicked=(id)=>{
    return {
        type:MENU_BUTTON_CLICKED,
        pageId: id
    }
}