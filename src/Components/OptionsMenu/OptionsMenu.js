import React, { Component } from "react";
//Components
import SubCategory from '../SubCategory';
import Button from '../Button';
import HeaderPage from '../HeaderPages';
import Order from '../Order';

class OptionsMenu extends Component {
  state = {
    showOrder: false, 
    hamburgers: {
      Cheese: 0,
      Vegetarian: 0,
      Chicken: 0,
      Bacon: 0,
      DoubleMeat: 0,
      Mexican: 0,
    },
    chickens: {
      Broaster: 0,
      Fried: 0,
      Spicy: 0,
      BBQ: 0,
      Bittersweet: 0,
      'Sour Cream': 0,
    },
    pizzas: {
      Hawaiana: 0,
      Tropical: 0,
      Veggies: 0,
      Meats: 0,
      'Chicken Mushroom': 0,
      Mexican: 0,
    }
  }

  handleRenderOrder = () => {
    this.setState({
      showOrder: true,
    })
  } 

  handleCloseOrder = () => {
    this.setState({
      showOrder: false
    })
  }

  handleUpdateProduct = (category, flavor, amount) => {
    if(amount >= 0){
    this.setState({
      [category]: {
        ...this.state[category],
        [flavor]: amount,
      },
    })
  }
  }
  
  render() {
    const { category } = this.props;
    const { showOrder } = this.state;
    return (
      <>
        <HeaderPage title={`Our wonderful *${category.toUpperCase()}*`} />
        <SubCategory 
          handleUpdateProduct={this.handleUpdateProduct}  
          optionCategory={category} 
        />
        <Button text="I wanna eat it" handleMethod={this.handleRenderOrder} />
        {showOrder && <Order order={this.state[category]} categoryProduct={category} handleCloseOrder={this.handleCloseOrder} /> }
      </>
    )
    
  }
}

export default OptionsMenu;
