import BasicCheckbox from "../components/atoms/BasicCheckbox";
import * as React from 'react';
import { ComponentStory } from '@storybook/react';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
    title: "Components/Atoms/BasicCheckbox",
    component: BasicCheckbox,
    argTypes: {
        size: {defaultValue: 'medium'},
        //checked: {defaultValue: 'false'}
        //handleClick: { action: "handleClick" } 
    }
}

// Make a story. Try using return instead of  =>
const story: ComponentStory<typeof BasicCheckbox> = ({checked, size, color, icon, checkedIcon}) => (
    <BasicCheckbox checked={checked} color={color} size={size} icon={icon} checkedIcon={checkedIcon}/>
);


// Bind the basic story and make variants 

export const Unchecked = story.bind({});
Unchecked.args = {
    checked: false,
};

export const Checked = story.bind({})
Checked.args = {
    checked: true,
};

export const FavoriteCheckbox = story.bind({})
FavoriteCheckbox.args={
    color: "success",
    icon: <FavoriteBorder/>,
    checkedIcon: <Favorite/>,
};

export const BookmarkCheckbox = story.bind({})
BookmarkCheckbox.args = {
    color: "warning",
    icon: <BookmarkBorderIcon/>,
    checkedIcon: <BookmarkIcon/>,
};

