import React, { useEffect, useState } from 'react'
import './calorieFinder.scss'
import axios from 'axios'
import Item from '../item/Item';
import Search from '../search/Search';

const CalorieFinder = () => {

    const [foodState, setFoodState] = useState({ items: [], term: 'egg' });

    useEffect(() => {
        axios
            .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodState.term}`, {
                headers: {
                    "X-Api-Key": "6A1Khw0bb4Yytpf9cVkUGA==RnqW2ay0MqmwlBkh"
                }
            })
            .then((response) => {
                console.log(response.data.items);
                setFoodState({
                    ...foodState,
                    items: response.data.items
                });
            })
            .catch((error) => console.log(error.message));
        console.log(foodState.items);
    }, [])

    const fetchItems = () => {
        console.clear()
        axios
            .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodState.term}`, {
                headers: {
                    "X-Api-Key": "6A1Khw0bb4Yytpf9cVkUGA==RnqW2ay0MqmwlBkh"
                }
            })
            .then((response) => {
                console.log(response.data.items);
                setFoodState({
                    ...foodState,
                    items: response.data.items
                });
            })
            .catch((error) => console.log(error.message));
        console.log(foodState.items);
    }

    const getItems = () => {
        let foodItems = [];
        foodState.items.map(item => {
            foodItems.push(<Item
                key={item.name}
                name={item.name}
                calories={item.calories}
                carbs={item.carbohydrates_total_g}
                serve={item.serving_size_g}
                cholesterol={item.cholesterol_mg}
                fat_saturated={item.fat_saturated_g}
                fat_total={item.fat_total_g}
                fiber={item.fiber_g}
                potassium={item.potassium_mg}
                protein={item.protein_g}
                sodium={item.sodium_mg}
                sugar={item.sugar_g}
            />);
        });

        return foodItems;
    }

    const storeValue = (searchValue) => {
        setFoodState({
            ...foodState,
            term: searchValue
        });
        fetchItems();
        console.log(foodState.term)
        console.log('searchValue:' + searchValue)
    }

    const storeClick = () => {
        fetchItems();
        console.log('click')
    }


    let allItems = getItems()

    return (

        <div className="basket">
            <Search sendValue={storeValue} sendEnter={storeClick} sendClick={storeClick} />

            <div className='items'>
                {allItems.length === 0 ? <div className='error'>No food found... <i className="fas fa-pizza-slice"></i></div> : allItems}
            </div>
        </div>
    )
}

export default CalorieFinder
