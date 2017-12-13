import * as React from "react";


interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
}

interface Props {
    items: Item[]
}

import CartItem from "./CartItem";

export default class CartList extends React.Component<Props> {
    
    render() { 
        console.log("CartList render");
        
        let items: Item[] = this.props.items;

        return (
            <div>
                 <h2>Cart List</h2>
            <div className="flex two">
                { 
                    items.map ( (item: Item) => (
                        <CartItem key={item.id} item={item} />
                    ))

                }
            </div>
            </div>
        )
    }
}