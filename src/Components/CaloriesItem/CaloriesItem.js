import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Style
import './caloriesItem.scss';

const CaloriesItem = ({ caloriesList, category }) => {

    const categoriesCalories = Object.keys(caloriesList);
    const dataCalories = categoriesCalories.reduce((acc, categoryCalories) => {
        const indexCategory = categoriesCalories.indexOf(categoryCalories);
        const category = { value: caloriesList[categoryCalories], name: categoriesCalories[indexCategory] };
        acc.push(category);
        return acc;
    },[]);
    return (
        <div className="calories-item">
            <h2 className="calories-item__title">{category}</h2>
            {dataCalories.map((caloriesItem, index) => (
                <div className="calories-item-card" key={index}>
                    <div className="calories-item-card-items">
                        <span className="calories-item-card-items__name">{caloriesItem.name}</span>
                        <span className="calories-item-card-items__amount">{caloriesItem.value}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

CaloriesItem.propTypes = {
    caloriesList: PropTypes.object,
    category: PropTypes.string
}

export default CaloriesItem;
