import * as cartService from "./services/cart.js";
import  createItem  from "./services/item.js";




const myCart = [];
const myWhishList = [];
console.log("Welcome to the your Shopee Cart!🛒");

const item01 = await createItem("mause gamer", 19.99, 4);
const item02 = await createItem("headset fone", 39.90,  3);

await cartService.addItem(myCart, item01);
await cartService.addItem(myCart, item02);

await cartService.removeItem(myCart, item02); 
await cartService.removeItem(myCart, item02); 
await cartService.removeItem(myCart, item01); 

await cartService.displayCart(myCart);


// await cartService.deletItem(myCart, item01.name);
// await cartService.deletItem(myCart, item02.name);

await cartService.calculateTotal(myCart);







