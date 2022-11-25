import * as React from 'react';
import TextField from '@mui/material/TextField';
import {ReactElement} from "react";


export type Props = {
    //onClick: MouseEventHandler,
    label?: string,
    variant: 'standard' | 'outlined' | 'filled',
    defaultValue?: string
}



const BasicTextField = (props: Props): ReactElement => {
    const {label, variant, defaultValue} = props;
    return(
  <TextField variant={variant} label={label} defaultValue={defaultValue} />
    );
};

//const BasicTextField = ({ variant, label, defaultValue}: Props) => (
  //  <TextField variant={variant} label={label} defaultValue={defaultValue} />
//)

export default BasicTextField





