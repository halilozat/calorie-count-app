import React from 'react';
import './macros.scss'

const Header = ({ macros, totalCarb, totalProtein, totalFat }) => {
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
