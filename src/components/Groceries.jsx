import React, { Component } from 'react';
import groceries from "../data/groceriesData";
import CurrentGroceries from './CurrentGroceries'
import GroceriesForm from './GroceriesForm';

class Groceries extends Component {
    constructor() {
        super()
        this.state = {
            allGroceries: groceries,
            isPurchased: false,
        }
        // console.log(this.state.allGroceries)
    }

    //toggle showing purchased or not
    toggleShowingPurchased = () => {
        let copyShowingPurchased = this.state.isPurchased
        copyShowingPurchased = !this.state.isPurchased
        this.setState({ isPurchased: copyShowingPurchased })
    }

    //changing isPurchased to true per item
    changeToPurchased = (index) => {
        console.log("called here ")
        let allGroceriesCopy = this.state.allGroceries
        allGroceriesCopy[index].isPurchased = true
        this.setState({ allGroceries: allGroceriesCopy })
    }

    //adding grocery object to the array from the form
    addGroceriesToList = (newGroceryFromForm) => {

        let groceriesCopy = this.state.allGroceries
        groceriesCopy.push(newGroceryFromForm)
        this.setState({
            allGroceries: groceriesCopy
        })
        console.log(this.state.allGroceries)

    }

    render() {
        return (
            <div className="bigContainer">

                <h1>My Grocery List</h1>

                <GroceriesForm addGroceriesToList={this.addGroceriesToList} />

                {this.state.isPurchased
                    ? <text>Showing Purchased Grocery Items</text>
                    : <text>Showing Unpurchased Grocery Items</text>}

                <button onClick={this.toggleShowingPurchased}>Toggle Purchased/Unpurchased items</button>

                {this.state.allGroceries.map((oneGroceryItem, i) =>
                    this.state.isPurchased
                        ? oneGroceryItem.isPurchased
                            ? <CurrentGroceries index={i} oneGroceryItem={oneGroceryItem} />
                            : null
                        : oneGroceryItem.isPurchased
                            ? null
                            : <CurrentGroceries index={i} oneGroceryItem={oneGroceryItem} changeToPurchased={this.changeToPurchased} />
                )}
            </div>
        );
    }
}

export default Groceries;