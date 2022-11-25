import React, {ReactElement} from "react";
import { Typography } from '@mui/material';


export type HeaderProps = {
    //variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    text: string,
    //paragraph?: boolean,
};

const Header = (props: HeaderProps): ReactElement => {
    const {variant, text} = props;
    return(
        <Typography variant={variant} /*gutterBottom component="div"*/>
            {text}
        </Typography>
    );
};


export default Header;