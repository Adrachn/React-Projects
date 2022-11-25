import React from "react";
import GameCard from "../organisms/GameCard";
import {useStyletron} from 'baseui';


const Games = () => {
    const [css, theme] = useStyletron();
    return (
        <div> 
            <h1>Games</h1>
            <p>Here we present to you the finest of handcrafted games; made completely, or partly, by wild strawberries. 
              Feel free to download and give any of them a try</p>
            <div
      className={css({
        display: 'flex',
        flex: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.8rem',
        marginTop: '30px',
      })}
    >
                <GameCard gameTitle="Temple Tale" link="https://adrachn.itch.io/temple-tale" image='https://source.unsplash.com/user/erondu/700x400' description="A 2D-puzzle platformer where 
                an explorer is trapped in an Aztec temple filled with traps and spirits. To escape,
                 she is forced to cooperate with an evil spirit encapsulated in a mask, who grants her the ability
                  to switch between the living and the spirit world."/>
                <GameCard gameTitle="Llama Palooza" link="https://dalallamastudio.itch.io/llama-palooza" image='https://source.unsplash.com/user/erondu/700x400'  description="A massive herd of llamas has gone nuts. The little 
                village of Dala has no choice but to try to calm them and find out what has gone wrong. Together they
                 will be victorious! ...Or will they?"/>
                <GameCard gameTitle="We 2 are human" link="https://adrachn.itch.io/we-2-are-human" image='https://source.unsplash.com/user/erondu/700x400' description="A two player couch co-op fumblecore game where you
                 play as two of the most highly advanced robots ever created. Co-operation and (un)friendliness is 
                 key to mission success."/>
             

                </div>
        </div>
    );
}
export default Games;