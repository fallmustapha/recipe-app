import SimpleButton from "../component";

export default {
    title:"Buttons",
    component: SimpleButton
}

const template = args=><SimpleButton {...args}></SimpleButton>
export const Default = template.bind({});
Default.args={
    label:"My button",
    color:"primary"
}