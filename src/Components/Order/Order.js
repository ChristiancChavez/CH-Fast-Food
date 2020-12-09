import React from 'react';
import Button from '../Button';
//Data
import subCategoriesData from '../../utils/subcategories';
//Styles
import './order.scss';

const Order = ({ handleCloseOrder, order, categoryProduct }) => {
    const currentOrder = Object.keys(order).reduce((acc, product) => {
        const productIndex = subCategoriesData[categoryProduct].findIndex(prod => prod.flavor === product);
        const flavorSelected = { product: Object.keys(order)[productIndex], amount: order[product], cost: subCategoriesData[categoryProduct][productIndex].cost }
        if(flavorSelected.amount > 0){
            acc.push(flavorSelected);
        }
        return acc;
    },[]);

    let totalCost = currentOrder.reduce((acc, item)=> {
        return acc + item.cost
    }, 0);

    return (
        <div className="order">
            <div className="order-list">
                {currentOrder.map((items, index) => (
                    <div className="order-list__product" key={index}>
                        <span className="order-list__product__option">{items.product}</span>
                        <span className="order-list__product__option order-list__product__option--amount">{items.amount}</span>
                <span className="order-list__product__cost">{items.cost}</span>
                    </div>
                ))}
                <div className="order-list__product order-list__product--total">
                    <span className="order-list__product__option">TOTAL</span>
                    <span className="order-list__product__cost">$ {totalCost}</span>
                </div>
            </div>
            <Button text="Let's do it" handleMethod={handleCloseOrder} />
        </div>
    )
}

export default Order;
