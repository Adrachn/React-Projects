import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {ReactElement} from "react";


//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export type Props = {
    checked?: boolean
    size?: 'small' | 'medium',
    //label?: string, // behöver form control label för det
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default',
    fontSize?: number,
    icon?: React.ReactNode,
    checkedIcon?: React.ReactNode,
}

const BasicCheckbox = (props: Props): ReactElement => {
    const {checked, color, size, icon, checkedIcon} = props;
    return(
        <Checkbox checked={checked} color={color} size={size} icon={icon} checkedIcon={checkedIcon} />
    );
};
//sx={{ '& .MuiSvgIcon-root': { fontSize: {fontSize} } }}

export default BasicCheckbox;
  


