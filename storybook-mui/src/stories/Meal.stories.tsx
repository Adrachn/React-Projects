import Meal from "../components/molecules/Meal";
import React from "react";
import {ComponentStory} from "@storybook/react";

export default {
    title: "Components/Molecules/Meal",
    component: Meal
}

const story: ComponentStory<typeof Meal> = ({text}) => (
    <Meal text={text}/>
)


export const FavoriteMeal = story.bind({});

FavoriteMeal.args = {
    text: "example dish",
}

//UncookedMeal.storyname = 'UncookedMeal';



