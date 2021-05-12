import React, { Component } from 'react';

class CurrentGroceries extends Component {
    // constructor(){
    //     super()
    //     this.state={

    //     }
    // }
    render() {
        return (
            <div>
                <h3>Item:{this.props.oneGroceryItem.item}</h3>
                <h4>Brand: {this.props.oneGroceryItem.brand}</h4>
                <h4>Package Size: {this.props.oneGroceryItem.units}</h4>
                <h4>Quantity: {this.props.oneGroceryItem.quantity}</h4>
                {this.props.oneGroceryItem.isPurchased 
                ? null 
                : <button onClick={()=>{this.props.changeToPurchased(this.props.index)}}>Change to Purchased</button> }
            </div>
        );
    }
}

export default CurrentGroceries;