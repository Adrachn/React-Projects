import * as React from "react";
import {HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem} from "baseui/header-navigation";
import { Button } from "baseui/button";
import {ThemeProvider, useStyletron, styled} from 'baseui';
//import { strawberryTheme } from "../../themes/strawberry";
import CrafterAvatar from "../atoms/CrafterAvatar";
import {StatefulPopover, PLACEMENT, TRIGGER_TYPE} from 'baseui/popover';
import {Paragraph3} from 'baseui/typography';
import {Menu} from 'baseui/icon';
import {StatefulMenu} from 'baseui/menu';
import {ChevronDown} from 'baseui/icon';
//import '../../styles/NavBarHeader.css';
//import "NavBarHeader.css";



const ITEMS = [
  {label: 'Games', href:"games"},
  {label: 'Crochet', href:"crochet"},
  {label: 'Felting', href:"felting"},
  {label: 'Test page', href:"test"},
];

/*

    */

  /*  <StatefulPopover
    content={
      <Paragraph3 padding="scale500">hello world</Paragraph3>
    }
    accessibilityType={'tooltip'}
    triggerType={TRIGGER_TYPE.hover}
  >
    <span className={css({...theme.typography.font300})}>
      Hover
    </span>
  </StatefulPopover>
  */

  /*
    <Button endEnhancer={() => <ChevronDown size={24} />}>
        Products
      </Button>
      */

//ev testa egen li med a med egen klass
const NavBarHeader = () => {
  const [css, theme] = useStyletron();

  return (
    
     /* <div className={css({
        //display: 'flex',
        //flex: 'column-reverse',
       // justifyContent: 'center',
        //alignItems: 'center',
        //flexWrap: 'wrap',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
       //padding: '.8rem',
        //marginTop: '30px',
      })}>*/
    <HeaderNavigation 
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          outline: `${$theme.colors.warning200} solid`,
          backgroundColor: $theme.colors.warning200
        })
      }
    }}>
   
      <StyledNavigationList $align={ALIGN.left} >
        <CrafterAvatar/>
        <StyledNavigationItem>
        <a color="green" href="home" >WST</a>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
        <a href="games" >Games</a>
        </StyledNavigationItem>
        <StyledNavigationItem>
        <StatefulPopover
      
      placement={PLACEMENT.bottomLeft}
      triggerType={TRIGGER_TYPE.hover}
      content={({close}) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={() => close()}
          overrides={{
            List: {style: {height: '150px', width: '138px'}},
          }}
        />
      )}
    >
      <h1 className={css({
            
            color: "pink",
            
          })} >Products</h1>
    
    </StatefulPopover>
    </StyledNavigationItem>
        <StyledNavigationItem>
        <a href="about" >About</a>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>
            <Menu/>
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}
export default NavBarHeader;