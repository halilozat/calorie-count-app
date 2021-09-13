import React from 'react';

const Header = ({ macros }) => {
  return (
    <>
      <div>
        Günlük Makrolarınız:
        <br />
        <br />
        Karbonhidrat: {macros.carb} gr. daha alabilirsiniz.
        <br />
        Protein: {macros.protein} gr. daha alabilirsiniz.
        <br />
        Yağ: {macros.fat} gr. daha alabilirsiniz.
      </div>
    </>
  );
};

export default Header;
