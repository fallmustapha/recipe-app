import MenuButton from "../component";


export default{
    title:"Menu Button",
    component:MenuButton
}
const Template=(args)=><MenuButton {...args}></MenuButton>;

export const LightButton= Template.bind({});

LightButton.args={
    label:"Light Button",
    uri:"#"
}
