import React from 'react';
import './food.css';

const Food = ({ food, basket, setBasket, macros, totalFat, totalCarb, totalProtein }) => {
    const basketItem = basket.find((item) => item.id === food.id);

    const addBasket = () => {
        const checkBasket = basket.find((item) => item.id === food.id);
        // ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter((item) => item.id !== food.id), checkBasket]);
        } else {
            setBasket([
                ...basket,
                {
                    id: food.id,
                    amount: 1,
                },
            ]);
        }
    };

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === food.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== food.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <>
            <div className="food">

                <img src={food.image} alt="" />
                <h6>{food.title}</h6>

                <div className="carb">{food.carb} gr karbonhidrat</div>
                <div className="carb">{food.protein} gr protein</div>
                <div className="carb">{food.fat} gr yağ</div>

                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                    <div className="amount">
                        {basketItem && basketItem.amount || 0}
                    </div>
                    <button
                        className="buy-btn"
                        disabled={macros.fat - totalFat <= 0 || macros.protein - totalProtein <= 0 || macros.carb - totalCarb <= 0}
                        onClick={addBasket}
                    >Ekle
                    </button>
                </div>
            </div>
        </>
    );
};

export default Food;
