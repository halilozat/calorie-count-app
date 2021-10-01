import React, { useEffect, useState } from 'react';
import './calorieFinder.scss';
import axios from 'axios';
import Item from './item/Item';
import Search from './search/Search';
import ContentLoader from "react-content-loader"

const CalorieFinder = () => {

    const [loading, setLoading] = useState(false)
    const [foodState, setFoodState] = useState({
        items: [],
        term: 'Egg',
    });

    const MyLoader = () => (
        <ContentLoader viewBox="0 0 500 475" height={300} width={500} backgroundColor="#fff"
            foregroundColor="#ecebeb">
            <rect x="9.9" y="29.5" width="596" height="17" />
            <rect x="29.9" y="64.7" width="296" height="17" />
        </ContentLoader>
    )

    useEffect(() => {
        fetchItems(foodState.term);
    }, []);


    const fetchItems = async (foodTerm) => {
        setLoading(true)
        try {
            const response = await axios.post(
                'http://localhost:5001/api/v1/food/getFoods',
                { query: foodTerm }
            );
            console.log(response.data.items);
            setFoodState({
                ...foodState,
                items: response.data.items,
                term: foodTerm,
            });
            setLoading(false)
        } catch (error) {
            console.log(error.message);
        }
    };

    const getItems = () => {
        let foodItems = [];
        foodState.items.map((item) => {
            foodItems.push(
                <Item
                    food={item}
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
                {loading && (
                    <MyLoader />
                )}
                {allItems.length === 0 && loading === false ? (
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
