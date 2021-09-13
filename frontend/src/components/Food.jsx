import React from 'react';
import './food.css';

const Food = ({ food, basket, setBasket }) => {
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
                <h5>{food.title}</h5>

                <div className="carb">{food.carb} gr karbonhidrat</div>
                <div className="carb">{food.protein} gr protein</div>
                <div className="carb">{food.fat} gr yağ</div>

                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                    <div className="amount">
                        {basketItem && basketItem.amount || 0}
                    </div>
                    <button onClick={addBasket}>Ekle</button>
                </div>
            </div>
        </>
    );
};

export default Food;
