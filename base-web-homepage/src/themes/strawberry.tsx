//https://baseweb.design/guides/theming/#accessing-your-theme-through-styling-utilities
//The primitives you pass into createTheme will override our default primitives so you can gradually build up your theme.

import {createTheme} from 'baseui';


const primitives = {
    accent: '#F127E4', // hot pink
    accent50: '#FDEDFC',
    accent100: '#FCD3F9',
    accent200: '#F89FF3',
    accent300: '#F45AEA',
    accent400: '#F127E4',
    accent500: '#B71DAD',
    accent600: '#901788',
    accent700: '#600F5B',
  };

   
  const overrides = {
  /*colors: {
    buttonSecondaryFill: primitives.accent100,
    buttonSecondaryText: primitives.accent,
    buttonSecondaryHover: primitives.accent200,
    buttonSecondaryActive: primitives.accent300,
    buttonSecondarySelectedFill: primitives.accent200,
    buttonSecondarySelectedText: primitives.accent,
    buttonSecondarySpinnerForeground: primitives.accent700,
    buttonSecondarySpinnerBackground: primitives.accent300,
  },*/
  extras: {
      textDecorationLine: "none"
  }
};
export const strawberryTheme = createTheme(primitives ,overrides);
  

/*we first reassign the accent color on our theme primitives to hot pink. 
Then we use overrides to re-map the secondary button colors to use our 
hot pink accent colors rather than the default primary colors.*/

  