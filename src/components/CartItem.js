import React from 'react';
import { Input, Collection } from 'usetheform';

function CarItem({id, name, quantity, price}) {
    return(
        <Collection object>
            <Input type="hidden" name="id" value={id} />
            <div className="field">
                <label>Item</label>
                <Input type="text" name="name" readOnly value={name} />
            </div>
            <div className="field">
                <label>Quantity</label>
                <Input type="number" name="quantity" value={quantity} />
            </div>
            <div className="field">
                <label>Price €</label>
                <Input type="text" name="price" value={price} readOnly />
            </div>
            <div className="field">
                <button type="button" onClick={() => onRemoveItem(id) } ></button>
            </div>
        </Collection>
    )
}

export default CarItem;