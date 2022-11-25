import React from "react";
import { Check } from "baseui/icon"; //<Check size={28}/>
import {Accordion, Panel} from 'baseui/accordion';
/* function CheckMark() {
  return <Check size={64} />;
} */

/*
//make the menu sub-menu items drop down on mouse hover 
ul.nav li.dropdown:hover > ul.dropdown-menu{
  display: block;
  margin: 0;
}
*/


const About = () => {
    return (
        <div> 
            <h1>About</h1>
            <p>The wild strawberries originally come from the game World of Warcraft, where it started with the forming of a guild in 2006???.
                Through the journey of WoW and via different guilds, more strawberries were accumulated. All with different background, but with
                 the same shared values. They all agreed that family comes first, we take care of each other, respect one another, are patient and
                 give others the benefit of the doubt ----.
                
                Today to be a wild strawberry is a bit broader than just World of Warcraft. We meet in several games, some still in WoW.  
                Wild Strawberry Tree is now a community spanning several areas, but with one thing in common - we all enjoy each other&apos;s company. 
                This comes from the ever lasting root of values that this glorious tree now grows from. During the glory days of WoW we arranged 
                several guild meetings, but there&apos;s even the occational meetup to this day, over a decade later.
            </p>
           

            <Accordion
              onChange={({ expanded }) => console.log(expanded)}
              disabled
            >
              <Panel title="Panel 1">Content 1</Panel>
              <Panel title="Panel 2">Content 2</Panel>
              <Panel title="Panel 3">Content 3</Panel>
            </Accordion>
                
            
        </div>
       
    );
}
export default About;