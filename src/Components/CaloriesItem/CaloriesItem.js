import React from 'react';
//Style
import './caloriesItem.scss';

const CaloriesItem = ({ caloriesList }) => {

    const categoriesCalories = Object.keys(caloriesList);
    const dataCalories = categoriesCalories.reduce((acc, categoryCalories) => {
        const indexCategory = categoriesCalories.indexOf(categoryCalories);
        let newAcc = acc;
        newAcc = [...acc, { value: caloriesList[categoryCalories], name: categoriesCalories[indexCategory] }];
        return newAcc;
    })
    console.log(dataCalories, 'jjjjj');

    return (
        <div className="calories-item">
            <h2 className="calories-item__title">Hamburguer</h2>
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

export default CaloriesItem;