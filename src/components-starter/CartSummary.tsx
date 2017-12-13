import * as React from "react";

interface Props {
    amount: number,
    count: number
};

export default class CartSummary extends React.Component<Props> {

    render() {
        let {amount, 
             count } = this.props;
        console.log("CartSummary render ", amount, count);

        return (
            <div>
                 <h2>Cart Summary</h2>
                <p> Amount {amount} </p>
                <p> Count {count} </p>
            </div>
        )
    }
}