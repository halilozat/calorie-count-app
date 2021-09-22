import React, { useContext } from 'react';
import FoodContext from '../../context/foodContext/FoodContext';
import './macros.scss'

const Header = () => {

  const { macros, totalCarb, totalProtein, totalFat } = useContext(FoodContext)

  return (
    <>
      {
        <ul className="macros">
          <li className="carb">Karbonhidrat: <span>{macros.carb - totalCarb} gr. daha alabilirsiniz.</span></li>
          <li className="protein">Protein: <span>{macros.protein - totalProtein} gr. daha alabilirsiniz.</span></li>
          <li className="fat">Yağ: <span>{macros.fat - totalFat} gr. daha alabilirsiniz.</span></li>
        </ul>
      }
    </>
  );
};

export default Header;
