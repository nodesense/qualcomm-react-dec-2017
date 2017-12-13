import * as React from "react";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import Checkout from "./Checkout";

interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
}

interface State {
    amount: number;
    count: number;
    items: Item[],
    flag: boolean;
}

interface Props {

}
 
export default class Cart extends React.Component< {}, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            items: [{id: 1, name: 'Product 1', price: 100, qty: 1}],
            amount: 0,
            count: 0,
            flag: false
        };
    }

    addItem() {
        // let id: number = Math.floor(Math.random() * 10000);
        // let item: Item = {
        //     id: id,
        //     name: `Product ${id}`,
        //     price: 100 + Math.floor(Math.random() * 100),
        //     qty: 1
        // }

        
    }

    removeItem(id: number) {

    }

    updateItem(id: number, qty: number) {

    }

    empty() {

    }

    refresh() {

    }

    reCalculate(items: Item[]) {
        let amount = 0;
        let count = 0;

        for (let item of this.state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount: amount,
            count: count
        })
    }

    componentWillMount() {
         
    }

    render() {
        console.log("Cart render");

        return (
            <div>
                <h2>Cart</h2>
                <div>
                    <button onClick={ ()=> this.addItem()}>
                      Add
                    </button>

                    <button onClick={ ()=> this.empty()}>
                      Empty
                    </button>


                    <button onClick={ ()=> this.refresh()}>
                      Refresh
                    </button>
                </div>
                <CartList items={this.state.items} />
                <CartSummary amount={this.state.amount}
                            count={this.state.count} />

                <Checkout />
            </div>
        )
    }
}