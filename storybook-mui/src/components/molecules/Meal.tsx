import React, { ReactElement } from 'react';
import { Typography } from '@mui/material';
import BasicCheckbox from "../atoms/BasicCheckbox";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Stack from "@mui/material/Stack";

export default (props: { text: string }): ReactElement => {
    return (
        <Stack
            direction="row"
            //justifyContent="center"
            alignItems="center"
            spacing={0}
        >
        <Typography component="p" variant="h6">
            {props.text}
        </Typography>
        <BasicCheckbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} color={"error"}/>
        </Stack>
    );
};