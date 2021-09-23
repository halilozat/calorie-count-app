import React, { useContext } from 'react';
import FoodContext from '../../context/foodContext/FoodContext';
import './macros.scss'

const Header = () => {

  const { macros, totalCarb, totalProtein, totalFat, totalCalorie } = useContext(FoodContext)

  return (
    <>
      {
        <ul className="macros">
          <li className="carb">
            {
              Math.round(macros.carb - totalCarb) > 0 ?
                <div>Carbohydrate : <span>You need {Math.round(macros.carb - totalCarb)} g. carbohydrates.</span></div>
                :
                <div>Carbohydrate : <span>You got an extra {-Math.round(macros.carb - totalCarb)} g of carbohydrates.</span></div>
            }
          </li>
          <li className="protein">
            {
              Math.round(macros.protein - totalProtein) > 0 ?
                <div>Protein : <span>You need {Math.round(macros.protein - totalProtein)} g. proteins.</span></div>
                :
                <div>Protein : <span>You got an extra {-Math.round(macros.protein - totalProtein)} g of proteins.</span></div>
            }
          </li>
          <li className="fat">
            {
              Math.round(macros.fat - totalFat) > 0 ?
                <div>Fat : <span>You need {Math.round(macros.fat - totalFat)} g. fats.</span></div>
                :
                <div>Fat : <span>You got an extra {-Math.round(macros.fat - totalFat)} g of fats.</span></div>
            }
          </li>
          {
            Math.round(totalCalorie) > 0
              ?
              <li className="calorie">

                <div>Total Calories : <span>{Math.round(totalCalorie)}</span></div>

              </li>
              :
              <div></div>
          }
        </ul>
      }
    </>
  );
};

export default Header;
