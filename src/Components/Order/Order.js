import React from 'react';
import Button from '../Button';
//Styles
import './order.scss';

const Order = ({ handleCloseOrder }) => (
    <div className="order">
        <div className="order-list">
            <div className="order-list__product">
                <span className="order-list__product__option">Hamburguer</span>
                <span className="order-list__product__cost">1.50</span>
            </div>
            <div className="order-list__product">
                <span className="order-list__product__option">Hamburguer</span>
                <span className="order-list__product__cost">1.50</span>
            </div>
            <div className="order-list__product">
                <span className="order-list__product__option">Hamburguer</span>
                <span className="order-list__product__cost">1.50</span>
            </div>
            <div className="order-list__product order-list__product--total">
                <span className="order-list__product__option">TOTAL</span>
                <span className="order-list__product__cost">4.50</span>
            </div>
        </div>
        <Button text="Let's do it" handleMethod={handleCloseOrder} />
    </div>
)

export default Order;
