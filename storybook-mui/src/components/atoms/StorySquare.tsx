import React, {ReactElement } from 'react';
import { Box } from '@mui/material';

export const StorySquare = (props: {
    height: number;
    width: number;
    color: string;
}): ReactElement => {
    return <Box width={props.width} height={props.height} bgcolor={props.color} />;
};