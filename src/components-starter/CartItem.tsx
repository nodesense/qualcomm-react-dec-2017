import * as React from "react";
 
interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
}

interface Props {
    item: Item
}

interface State {
    qty?: number
}

export default class CartItem extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            qty: 0
        }
    }

    render() {
        let item: Item = this.props.item;
        console.log("CartItem render ", item.id);
        
        return (
            <div>
                <article className="card">
                    <header>
                        <h1>{item.name}</h1>
                    </header>

                    <div>
                        <p> Price: {item.price} </p>
                        <p> Qty: {item.qty} </p>
                        <p> Total: {item.qty * item.price} </p>
                    </div>

                    <footer>
                        <button> Update </button>
                        <button> Remove </button>
                    </footer>

                </article>
            </div>
        )
    }
}