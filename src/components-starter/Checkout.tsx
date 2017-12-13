import * as React from "react";

interface Props {

}

interface State {
    name: string;
    email: string;
    address: string;
    stateName: string;
    shipment: string;
    gift: boolean,

    states: string[];
}

export default class Checkout extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: '',
            stateName: 'Kerala',
            shipment: 'air',
            gift: false,

            states: ['Karnataka', 'Tamilnadu', 'Telungana', 'Kerala']
        }

    }

    handleSubmit(e: any) {

    }

    handleValueChange(e : any) {
        let target = e.target;
        let name = target.name;
        let value =  target.type === 'checkbox' ? target.checked : target.value;

        console.log(name, value);

        this.setState({
            [name]: value
        })
    }

    render() {
        console.log("Checkout render");

        return (
            <div style={ {'text-align': 'left' }} >
                 <h2>Checkout</h2>
                <form onSubmit={ e => this.handleSubmit(e)}>
                   <label> Name </label>
                    <input 
                           name="name"
                           type="text"
                           value={this.state.name}
                           onChange={ (e) => this.handleValueChange(e)}
                    />

                    EMail
                    <input 
                           name="email"
                           type="email"
                           value={this.state.email}
                           onChange={ (e) => this.handleValueChange(e)}
                           

                    />

                    Address
                    <textarea 
                              name="address"
                              onChange={ (e) => this.handleValueChange(e)}
                                 
                    >
                        {this.state.address}
                    </textarea>

                    State
                    <select 
                            name="state"
                            onChange ={ (e) => this.handleValueChange(e)}
                            value={this.state.stateName}
                    >
                        {
                            this.state.states.map( (stateName:string) => (
                                <option 
                                        key={stateName}
                                        value={stateName}>
                                        {stateName}
                                </option>
                            ))
                        }
                    </select>

                    
                    <label>
                    <input 
                           type="radio"
                           name="shipment"

                           value="air"
                           onChange ={ (e) => this.handleValueChange(e)}
                           checked={ this.state.shipment == 'air'? true: false }
                           
                    />
                        <span 
                            className="checkable">Air</span>
                    </label>
                     

                    <div>
                    <label>
                    <input 
                           type="radio"
                           name="shipment"
                           value="ground"
                           checked={ this.state.shipment == 'ground'? true: false }
                           onChange ={ (e) => this.handleValueChange(e)}
                           
                           
                    />
                        <span 
                             className="checkable">Ground</span>
                    </label>
                    </div>
  
                    <div>
                    <label>
                    <input 
                           type="checkbox"
                           name="gift"
                           value="gift"
                           checked={ this.state.gift}
                           onChange ={ (e) => this.handleValueChange(e)}
                           
                           
                    />
                        <span 
                             className="checkable">Gift</span>
                    </label>
                    </div>
                    

                    <button >
                        Order
                    </button>

                </form>
            </div>
        )
    }
}