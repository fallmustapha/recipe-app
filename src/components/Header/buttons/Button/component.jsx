import Button from '@material-ui/core/Button';
import React from 'react';
import {string} from 'prop-types'

const SimpleButton=({label,color,variant})=>{
    return (
       <Button color={color} variant="contained">{label}</Button>
    )
}
SimpleButton.propTypes={
    label:string,
    color:string,
    variant:string
}
SimpleButton.defaultProps={
    label:"Button",
    color:"primary",
    variant:"contained"
}
export default SimpleButton;
