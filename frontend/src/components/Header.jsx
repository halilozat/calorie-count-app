import React from 'react';

const Header = ({ macros, totalCarb, totalProtein, totalFat }) => {
  return (
    <>
      <div>
        Günlük Makrolarınız:

        {
          totalCarb > 0 && (
            <>
              <br />
              <br />
              Karbonhidrat: {macros.carb - totalCarb} gr. daha alabilirsiniz.
              <br />
              Protein: {macros.protein - totalProtein} gr. daha alabilirsiniz.
              <br />
              Yağ: {macros.fat - totalFat} gr. daha alabilirsiniz.

            </>
          ) || (
            <>
              <br />
              <br />
              Karbonhidrat: {macros.carb} gr. daha alabilirsiniz.
              <br />
              Protein: {macros.protein} gr. daha alabilirsiniz.
              <br />
              Yağ: {macros.fat} gr. daha alabilirsiniz.
            </>
          )

        }


      </div>
    </>
  );
};

export default Header;
