import React, { useState, useEffect } from 'react';
//Components
import HeaderPage from '../../components/HeaderPages';
import CaloriesItem from '../../components/CaloriesItem'
//Dependencies 
import axios from "axios";
//Styles
import './calories.scss';

const Calories = () => {
    const categoriesCalories = ['hamburguer', 'pizza', 'chicken'];
    const requestData = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: {query: 'hamburger'},
        headers: {
        'x-rapidapi-key': '47eb03ca64msh417151b3774ef0ap1e5bddjsn09f96aaeee65',
        'x-rapidapi-host': 'calorieninjas.p.rapidapi.com'
        }
    };
    const [caloriesList, setCaloriesList] = useState({});

    useEffect(() => {
        async function fetchData() {
            const request = await axios.request(requestData).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.error(error);
            });
            setCaloriesList(request.items[0]);
            return request.items[0];
        }
        fetchData();
    },[]);
    
    const renderCategories = categoriesCalories.map((categoryCalories, index) => (<CaloriesItem key={index} category={categoryCalories} caloriesList={caloriesList} />))
    return (
        <>
            <HeaderPage title="Calories of our products" />
            <div className="calories">
                {!!Object.keys(caloriesList).length && renderCategories}
            </div>
        </>
    )
}
export default Calories;
