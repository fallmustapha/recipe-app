import React from 'react';

import Navbar from "../component";

const mockLinks=[
    {
        label:"Link1",
        uri:"#"
    },
    {
        label:"Link2",
        uri:"#"
    },
    {
        label:"Link3",
        uri:"#"
    },
    {
        label:"Link4",
        uri:"#"
    }
]
export default {
    title:"Navbar",
    component:Navbar
};
const Template=(args)=><Navbar {...args}/>;
export const Default = Template.bind({});
Default.args={
    brand:"Recipe-App",
    links:mockLinks
}