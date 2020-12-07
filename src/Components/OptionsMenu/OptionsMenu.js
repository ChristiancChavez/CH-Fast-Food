import React, { Component } from "react";
//Components
import SubCategory from '../SubCategory';
import Button from '../Button';
import HeaderPage from '../HeaderPages';
import Order from '../Order';

class OptionsMenu extends Component {
  state = {
    showOrder: false
  }

  handleRenderOrder = () => {
    this.setState({
      showOrder: true,
      products: { 
        hamburgers: {
          Hawaiana: 0,
          Tropical: 0,
          Veggies: 0,
          Meats: 0,
          'Chicken Mushroom': 0,
          Mexican: 0,
        },
        chickens:{
          Cheese: 0,
          Vegetarian: 0,
          Chicken: 0,
          Bacon: 0,
          DoubleMeat: 0,
          Mexican: 0,
        },
        pizzas:{
          Broaster: 0,
          Fried: 0,
          Spicy: 0,
          BBQ: 0,
          Bittersweet: 0,
          'Sour Cream': 0,
        }
      }
    })
  } 

  handleCloseOrder = () => {
    this.setState({
      showOrder: false
    })
  }


  render() {
    const { category } = this.props;
    const { showOrder, products } = this.state;
    return (
      <>
        <HeaderPage title={`Our wonderful *${category.toUpperCase()}*`} />
        <SubCategory  optionCategory={category} products={products} />
        <Button text="I wanna eat it" handleMethod={this.handleRenderOrder} />
        {showOrder && <Order handleCloseOrder={this.handleCloseOrder} /> }
      </>
    )
    
  }
}

export default OptionsMenu;
