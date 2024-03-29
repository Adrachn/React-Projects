import React, {useState} from 'react';
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from './ThemeContext';
      

export default function ContextExample(){
    return (
        <ThemeProvider>
            <FunctionContextComponent/>
            {/* <ClassContextComponent/>   */}
        </ThemeProvider>
    )
} 