import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button, SHAPE} from 'baseui/button';
import {useStyletron} from 'baseui';


type GameCardProps={
  gameTitle?: string;
  description?: string;
  link?: string;
  image?: string;
}

const GameCard = ({gameTitle="Game Title", description="A most wonderful game", link, image}:GameCardProps) =>{
  const [css] = useStyletron();
  return (
    
    <div className={css({
      padding: '.25rem',
    })}>
          <Card
      overrides={{Root: {style: {width: '350px', }}}}
      headerImage={image}
      title={gameTitle} 
    >
      <StyledBody>
        {description}
      </StyledBody>
      <StyledAction >
        <Button $as="a" href={link} target="_blank" overrides={{BaseButton: {style: {width: '100%',  }}}}>
          To the game!
        </Button>
      </StyledAction>
    </Card>
    </div>
  );
}
export default GameCard;


const Inner: React.FunctionComponent = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};