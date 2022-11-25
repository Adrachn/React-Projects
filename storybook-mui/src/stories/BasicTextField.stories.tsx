import BasicTextField from "../components/atoms/BasicTextField";
import React from "react";
import { ComponentStory } from '@storybook/react';
//import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'; // ikoner

export default {
    title: "Components/Atoms/BasicTextField",
    component: BasicTextField,
}

const story: ComponentStory<typeof BasicTextField> = ({label, variant, defaultValue}) => (
    <BasicTextField variant={variant} label={label} defaultValue={defaultValue}/>
);

//const Template = args => <BasicTextField { ...args}/>

//export const Variant1 = () => <BasicTextField variant="standard" label="standard" defaultValue="standard"/>;
//export const Variant2 = () => <BasicTextField variant="outlined" label="outlined" defaultValue="outlined"/>;
//export const Variant3 = () => <BasicTextField variant="filled" label="filled" defaultValue="filled"/>;


//props---


// sätt default som default values i argtypes ist? under export default

export const Standard = story.bind({})
Standard.args = {
    variant:"standard",
    label:"standard",
    defaultValue:"standard"
}

export const Outlined = story.bind({})
Outlined.args = {
    variant:"outlined",
    label:"outlined",
    defaultValue:"outlined"
}

export const Filled = story.bind({})
Filled.args = {
    variant:"filled",
    label:"filled",
    defaultValue:"filled"
}