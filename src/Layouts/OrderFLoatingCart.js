import React from "react";

const OrderFLoatingCart = ({ setOpenCart }) => {
  return (
    <div className="w-1/2 h-1/2 fixed z-50 top-[25vh] shadow-2xl  max-w-[550px] max-h-[550] overflow-x-hidden tr right-0 bg-secondLightPrimary p-4">
      <div className="flex justify-between items-center bg-primary">
        <h1>ok</h1>
        <button onClick={() => setOpenCart(false)}>X</button>
      </div>
      <h1> ok</h1>
    </div>
  );
};

export default OrderFLoatingCart;
