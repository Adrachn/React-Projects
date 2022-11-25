import React, {ReactElement} from "react";
import {Box, Typography} from '@mui/material';


export const StorySquare = (props: {
    height: number;
    width: number;
    color: string;
}): ReactElement => {
    return <Box width={props.width} height={props.height} bgcolor={props.color} />;
};
const Paragraph = () => {
    return(
        <></>
    //<Typography paragraph=true /*gutterBottom component="div"*/>{text}</Typography>
    )
};



   



export default Paragraph;