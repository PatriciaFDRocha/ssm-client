import React from "react";
import { Collection } from "usetheform";
import CartItem from "./CartItem";

function Cart({items, onRemoveItem}) {
    return(
        <Collection object name="shoppingCart" >
            <Collection array name="items" >
                {items.map((item) => 
                    <CartItem {...item} onRemoveItem={onRemoveItem} key={item.id} />
                )}
            </Collection>
        </Collection>
    )
}

export default Cart;