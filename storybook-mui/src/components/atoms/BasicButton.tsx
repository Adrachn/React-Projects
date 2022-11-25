import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";


type Props = {
    //onClick: MouseEventHandler,
    text: string,
    variant?: 'text' | 'outlined' | 'contained';
}

const BasicButton = ({/*onClick*/ variant, text}: Props) => (
    <Button variant={variant} /*onClick={onClick}*/>{text}</Button>
)
export default BasicButton;


BasicButton.propTypes = {
    label: PropTypes.string,
    //variant: PropTypes.string,
}
