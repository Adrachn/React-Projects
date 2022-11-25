import BasicButton from "../components/atoms/BasicButton";
import React from "react";


export default {
    title: "Components/Atoms/BasicButton",
    component: BasicButton,
    // argTypes: { handleClick: { action: "handleClick" } },
}
export const TextButton = () => <BasicButton variant="text" text="text"/>;
export const ContainedButton = () => <BasicButton variant="contained" text="contained"/>;
export const OutlinedButton = () => <BasicButton variant="outlined" text="outlined"/>;

