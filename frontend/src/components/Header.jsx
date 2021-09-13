import React from 'react';

const Header = ({ macros, totalCarb, totalProtein, totalFat }) => {
  return (
    <>
      <div>
        Günlük Makrolarınız:

        {
          totalCarb > 0 && (
            <>
              Karbonhidrat: {macros.carb - totalCarb} gr. daha alabilirsiniz.
              Protein: {macros.protein - totalProtein} gr. daha alabilirsiniz.
              Yağ: {macros.fat - totalFat} gr. daha alabilirsiniz.
            </>
          ) || (
            <>
              Karbonhidrat: {macros.carb} gr. daha alabilirsiniz.
              Protein: {macros.protein} gr. daha alabilirsiniz.
              Yağ: {macros.fat} gr. daha alabilirsiniz.
            </>
          )

        }


      </div>
    </>
  );
};

export default Header;
