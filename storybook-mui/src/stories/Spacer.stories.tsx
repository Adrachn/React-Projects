import React from "react";
import {ComponentStory} from '@storybook/react';
import {StoryFlexContainer} from "../components/atoms/StoryFlexContainer";
import {StorySquare} from "../components/atoms/StorySquare";
import SpacerComponent from "../components/atoms/Spacer";
// todo Alessandro skriver dem som component för tydliggöra:
// import SpacerComponent from './Spacer;

// varför inte bara en spacerComponent?

export default {
    title: "Components/Atoms/Spacer",
    component: SpacerComponent,
};

const story: ComponentStory<typeof SpacerComponent> = ({size, vertical}) => {
    if(vertical){
        return (
            <StoryFlexContainer>
                <StorySquare height={100} width={20} color="blue" />
                <SpacerComponent size={size} vertical={true} />
                <StorySquare height={100} width={20} color="blue" />
            </StoryFlexContainer>
        );
    }
    return(
        <>
            <StorySquare height={20} width={100} color="blue" />
            <SpacerComponent size={size} />
            <StorySquare height={20} width={100} color="blue" />
        </>
    );
};

export const Spacer = story.bind({});

Spacer.args = {
    size: 10,
    vertical: false,
}