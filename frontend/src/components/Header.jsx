import React from 'react';
import './header.css'

const Header = ({ macros, totalCarb, totalProtein, totalFat }) => {
  return (
    <>
      <div>


        {
          totalCarb > 0 && (
            <>
              <div className="header">
                Karbonhidrat: <span>{macros.carb - totalCarb}</span> gr. daha alabilirsiniz.
                <br />
                Protein: <span>{macros.protein - totalProtein}</span> gr. daha alabilirsiniz.
                <br />
                Yağ: <span>{macros.fat - totalFat}</span> gr. daha alabilirsiniz.
              </div>

            </>
          ) || (
            <>
              <div className="header">
                Karbonhidrat: <span>{macros.carb}</span> gr. daha alabilirsiniz.
                <br />
                Protein: <span>{macros.protein}</span> gr. daha alabilirsiniz.
                <br />
                Yağ: <span>{macros.fat}</span> gr. daha alabilirsiniz.
              </div>
            </>
          )

        }


      </div>
    </>
  );
};

export default Header;
