import {useState} from 'react'
import {useQuery} from 'react-query'
// Components
import Item from './Item/Item';
import Cart from "./Cart/Cart";
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// styles
import {Wrapper, StyledButton} from './App.styles';
// types

// Properties we get back from the API. Amount is our own
export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
    // rating: number;
}


// the await in the parenthesis are for the api call itself and the one outside is for when converting to JSON (also async)
// Return CartItemType.  A promise is a generic in typescript?
const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
    console.log(data);
    
    // will iterate thru all items in cart and add amount to add to it. Accumulator will start with value of 0 then add the rest
    const getTotalItems = (items: CartItemType[]) => 
        items.reduce((ack: number, item)=> ack + item.amount, 0);
    
    
    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            // 1. Is the item already in the cart? Check prev state and loop through for matching id
            const isItemInCart = prev.find(item=>item.id === clickedItem.id)
            if(isItemInCart){
                return prev.map(item => (
                    item.id === clickedItem.id
                        ? {...item, amount: item.amount +1}
                        : item
                ))
            }
            // First time the item is added
            return [...prev, {...clickedItem, amount: 1}]   ;
        });
    };
    
    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev => 
            prev.reduce((ack, item) => {
             if(item.id === id){
                 if(item.amount === 1) return ack;     // returning the ack skips the item and removes from array
                 return [...ack, {...item, amount: item.amount -1}]     // {  } creates new item
             }else{
                 return [...ack, item];
             }
            }, [] as CartItemType[] )
        );
    };

    
    if(isLoading) return<LinearProgress/>; // finns circular progress med men svårare centrera på skärmen
    if(error) return <div>Something went wrong</div>;
    
  return(
      <Wrapper>
          <Drawer anchor={'right'} open={cartOpen} onClose={()=>setCartOpen(false)}>
              <Cart 
                  cartItems={cartItems} 
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart}
              />
          </Drawer>
          <StyledButton onClick={()=>setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color={'error'}>
                  <AddShoppingCartIcon/>
              </Badge>
          </StyledButton>
          <Grid container spacing={3}>
              {data?.map(item => (
                  <Grid item key={item.id} xs={12} sm={4}>
                      <Item item={item} handleAddToCart={handleAddToCart}/>
                  </Grid>  
              ))}    
          </Grid>
      </Wrapper>
  )
};

export default App;
