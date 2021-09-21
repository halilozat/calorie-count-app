import React, { useEffect, useState } from 'react';
import './calorieFinder.scss';
import axios from 'axios';
import Item from '../item/Item';
import Search from '../search/Search';
import *as api from '../../services/apiCalls'

const CalorieFinder = () => {
    const [status, setStatus] = useState('idle');
    const [foodState, setFoodState] = useState({
        items: [],
        term: 'Egg',
    });

    useEffect(() => {
        fetchItems(foodState.term);
    }, []);

    const fetchItems = async (foodTerm) => {

        try {
            const response = await axios.post(
                'http://localhost:5001/api/food/getFoods',
                { query: foodTerm }
            );
            console.log(response.data.items);
            setFoodState({
                ...foodState,
                items: response.data.items,
                term: foodTerm,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const getItems = () => {
        let foodItems = [];
        foodState.items.map((item) => {
            foodItems.push(
                <Item
                    key={item.name}
                    name={item.name}
                    calories={item.calories}
                    carbs={item.carbohydrates_total_g}
                    serve={item.serving_size_g}
                    fat_total={item.fat_total_g}
                    protein={item.protein_g}
                />
            );
        });

        return foodItems;
    };

    const searchHandler = async (value) => {
        await fetchItems(value);
    };

    let allItems = getItems();

    return (
        <div className="basket">
            <Search defaultValue={foodState.term} onChange={searchHandler} />

            <div className="items">
                {allItems.length === 0 ? (
                    <div className="error">
                        No food found... <i className="fas fa-pizza-slice"></i>
                    </div>
                ) : (
                    allItems
                )}
            </div>
        </div>
    );
};

export default CalorieFinder;
