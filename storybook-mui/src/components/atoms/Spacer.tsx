import React, {ReactElement} from "react";
import {Box} from "@mui/material";

export type SpacerProps = {
    vertical?: boolean;
    size: number;
};

export default (props: SpacerProps): ReactElement => {
    const {vertical, size} = props;

    if (vertical) {
        return <Box width={`${size}px`} height="100%"/> ;
    }
    return <Box width="100%" height={`${size}px`}/>    ;
} 