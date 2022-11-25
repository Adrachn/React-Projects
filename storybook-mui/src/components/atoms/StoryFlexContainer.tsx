import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

export const StoryFlexContainer = (props: { children?: ReactNode | undefined }): ReactElement => {
    return <Box display="flex">{props.children}</Box>;
};