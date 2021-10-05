import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useFoodContext } from '../../context/foodContext/FoodContext';
import './macros.scss'

const Header = () => {

  const { macros, totalCarb, totalProtein, totalFat, totalCalorie } = useFoodContext();
  const { user } = useContext(AuthContext)


  return (
    <>
      {
        <ul className="macros">

          <li className="carb">
            {
              Math.round(macros.carb - totalCarb) > 0
                ?
                <>
                  <div className="macro-header">Carbohydrate</div>
                  <di>You need {Math.round(macros.carb - totalCarb)}g carbohydrates.</di>
                </>
                :
                <>
                  <div className="macro-header">Carbohydrate</div>
                  <span>You got an extra {-Math.round(macros.carb - totalCarb)}g of carbohydrates.</span>
                </>
            }
          </li>
          <li className="protein">
            {
              Math.round(macros.protein - totalProtein) > 0 ?
                <div> <div className="macro-header">Protein</div>
                  <span>You need {Math.round(macros.protein - totalProtein)}g proteins.</span>
                </div>
                :
                <div><div className="macro-header">Protein</div><span>You got an extra {-Math.round(macros.protein - totalProtein)}g of proteins.</span></div>
            }
          </li>
          <li className="fat">
            {
              Math.round(macros.fat - totalFat) > 0 ?
                <div><div className="macro-header">Fat</div><span>You need {Math.round(macros.fat - totalFat)}g fats.</span></div>
                :
                <div><div className="macro-header">Fat</div><span>You got an extra {-Math.round(macros.fat - totalFat)}g of fats.</span></div>
            }
          </li>
          {
            Math.round(totalCalorie) > 0
              ?
              <li className="calorie">
                <div><div className="macro-header">Total Cal</div><span>{Math.round(totalCalorie)} calorie</span></div>
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
