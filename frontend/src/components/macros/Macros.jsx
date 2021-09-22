import React from 'react';
import './macros.scss'

const Header = ({ macros, totalCarb, totalProtein, totalFat }) => {
  return (
    <>
      {
        <div className="macros">
          Karbonhidrat: <span>{macros.carb - totalCarb}</span> gr. daha alabilirsiniz.
          <br />
          Protein: <span>{macros.protein - totalProtein}</span> gr. daha alabilirsiniz.
          <br />
          Yağ: <span>{macros.fat - totalFat}</span> gr. daha alabilirsiniz.
        </div>
      }
    </>
  );
};

export default Header;
