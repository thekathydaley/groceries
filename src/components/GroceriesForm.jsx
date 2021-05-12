import React, { Component } from 'react';

class GroceriesForm extends Component {
    constructor() {
        super()
        this.state = {
            item: "",
            brand: '',
            units: '',
            quantity: '',
            isPurchased: false,
        }
        // console.log(this.state.allGroceries)
    }


    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
        console.log(this.state.item)
    }

    // take items from state, put them in an object to send to addGroceriesToList
    addNewGroceries = (event) => {
        event.preventDefault();
        let newGroceryObject = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: false,
        }
        this.props.addGroceriesToList(newGroceryObject)

    }

    // addGroceriesToList props fx for adding up to state
    render() {
        return (
            <div>
                <form className="formArea" onSubmit={this.addNewGroceries}>

                    <label> Item: </label>
                    <input type="text" id="itemToAdd" name='item' value={this.state.item} onChange={this.handleChange} />
                    
                    <label> Brand: </label>
                    <input type="text" id="brandOfItemToAdd" name='brand' value={this.state.brand} onChange={this.handleChange}/>
                    
                    <label> Package Size: </label>
                    <input type="text" id="unitsOfItemToAdd" name='units' value={this.state.units} onChange={this.handleChange}/>

                    <label> Quantity: </label>
                    <input type="text" id="quantityOfItemToAdd" name='quantity' value={this.state.quantity} onChange={this.handleChange}/>

                    <input type="submit" value="Submit" />
                </form>
                
            </div>
        );
    }
}

export default GroceriesForm;