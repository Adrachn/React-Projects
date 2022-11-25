import React, {useState} from "react";
import ToggleComponent from "./custom hooks/useToggle/ToggleComponent";
import UseEffectComponent from "./useEffect/EffectComponent";
import UseEffectExample from "./useEffect/UseEffectExample";
import {MemoComponent} from "./useMemo/MemoComponent";
import RefComponent from "./useRef/RefComponent";
import ContextExample from "./useContext/ContextExample";
import ReducerComponent from "./useReducer/ReducerComponent";
import ReducerExample from "./useReducer/ReducerExample";
import CallbackComponent from "./useCallback/CallbackComponent";
import LocalStorageComponent from "./custom hooks/useLocalStorage/LocalStorageComponent.js"; // js?
import UpdateLoggerComponent from "./custom hooks/useUpdateLogger/UpdateLoggerComponent";
import LayoutEffectComponent from "./custom hooks/useLayoutEffect/LayoutEffectComponent";
import TimeoutComponent from "./custom hooks/useTimeout/TimeoutComponent";
import DebounceComponent from "./custom hooks/useDebounce/DebounceComponent";
import ArrayComponent from "./custom hooks/useArray/ArrayComponent";
import PreviousComponent from "./custom hooks/usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./custom hooks/useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./custom hooks/useStorage/StorageComponent";
import AsyncComponent from "./custom hooks/useAsync/AsyncComponent";
import FetchComponent from "./custom hooks/useFetch/FetchComponent";
import ScriptComponent from "./custom hooks/useScript/ScriptComponent";
import DeepCompareEffectComponent from "./custom hooks/useDeepCompareEffect/DeepCompareEffectComponent";
import EventListenerComponent from "./custom hooks/useEventListener/EventListenerComponent";
import OnScreenComponent from "./custom hooks/useOnScreen/OnScreenComponent";
import WindowSizeComponent from "./custom hooks/useWindowSize/WindowSizeComponent";
import MediaQueryComponent from "./custom hooks/useMediaQuery/MediaQueryComponent";
import GeolocationComponent from "./custom hooks/useGeolocation/GeolocationComponent";
import useStateWithValidation from "./custom hooks/useStateWithValidation/useStateWithValidation";
import StateWithValidation from "./custom hooks/useStateWithValidation/StateWithValidationComponent";
import SizeComponent from "./custom hooks/useSize/SizeComponent";
import EffectOnceComponent from "./custom hooks/useEffectOnce/EffectOnceComponent";
import ClickOutsideComponent from "./custom hooks/useClickOutside/ClickOutsideComponent";
import DarkModeComponent from "./custom hooks/useDarkMode/DarkModeComponent";
import CopyToClipboardComponent from "./custom hooks/useCopyToClipboard/CopyToClipboardComponent";
import CookieComponent from "./custom hooks/useCookie/CookieComponent";
import TranslationComponent from "./custom hooks/useTranslation/TranslationComponent";
import OnlineStatusComponent from "./custom hooks/useOnlineStatus/OnlineStatusComponent";
import RenderCountComponent from "./custom hooks/useRenderCount/RenderCountComponent";
import DebugInformationComponent from "./custom hooks/useDebugInformation/DebugInformationComponent";
import HoverComponent from "./custom hooks/useHover/HoverComponent";
import LongPressComponent from "./custom hooks/useLongPress/LongPressComonent";

//usestate hook -----------------------------------------------------------
// Bit special if using objects. Commented out examples
function App(){
   const [count, setCount] = useState(4);
   const [theme, setTheme] = useState("blue");
  
   /*const [state, setState] = useState({count: 4, theme: "blue"})
   const count = state.count;
   const theme = state.theme*/

   

    function decrementCount(){
        setCount(prevCount => prevCount-1);
        setTheme("red");

        //object
        /*setState(prevState => {
            // need the ... to keep the old state with "theme", otherwise all will be overwritten
            // for objects that is. Old values don't get merged together automatically
            return {...prevState, count: prevState.count - 1}
        })*/
    }
    function incrementCount(){
       setCount(prevCount => prevCount+1);
       setTheme("green");
    }

    return(
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
            <h1></h1>
            
            {/* <UseEffectComponent/> */}
            {/* <UseEffectExample/> */}
            {/* <ToggleComponent/> */}
            {/* <MemoComponent/> */}
            {/* <RefComponent/> */}
            {/* <ContextExample/> */}
            {/* <ReducerComponent/> */}
           {/*  <ReducerExample/> */}
           {/* <CallbackComponent/> */}
           {/* <LocalStorageComponent/> */}
           {/* <UpdateLoggerComponent/> */}
           {/* <LayoutEffectComponent/> */}
           {/* <TimeoutComponent/> */}
           {/* <DebounceComponent/> */}
           {/* <ArrayComponent/> */}
           {/* <PreviousComponent/> */}
           {/* <StateWithHistoryComponent/> */}
           {/* <StorageComponent/> */}
           {/* <AsyncComponent/> */}
           {/* <FetchComponent/> */}
           {/* <ScriptComponent/> */}
           {/* <DeepCompareEffectComponent/> */}
           {/* <EventListenerComponent/> */}
           {/* <OnScreenComponent/> */}
           {/* <WindowSizeComponent/> */}
          {/* <MediaQueryComponent/> */}
          {/* <GeolocationComponent/> */}
          {/* <StateWithValidation/> */}
          {/* <SizeComponent/> */}
          {/* <EffectOnceComponent/> */}
          {/* <ClickOutsideComponent/> */}
          {/* <DarkModeComponent/> */}
          {/* <CopyToClipboardComponent/> */} {/*funkar inte, nånting med copy-to-clipboard libraryt*/}
          {/* <CookieComponent/>  */}
          {/* <TranslationComponent/> */}
          {/* <OnlineStatusComponent/> */}
          {/* <RenderCountComponent/> */}
          {/* <DebugInformationComponent/> */}
          {/* <HoverComponent/> */}
          <LongPressComponent/>
        </>
    )
}

export default App;