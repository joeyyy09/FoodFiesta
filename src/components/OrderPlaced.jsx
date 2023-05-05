import React from "react";

const OrderPlaced = () => {
  return (
    <div className="flex flex-col justify-center items-center h-4/6 overflow-hidden">
      <div>
        <img
          className="w-48 h-48"
          src="https://static.vecteezy.com/system/resources/previews/006/900/704/original/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg"
          alt="Order placed icon"
          srcset=""
        />
      </div>
      <div className="mt-12 justify-center items-center">
        <h1 className="w-auto">Order Placed Sucessfully! </h1>
        <h3 className="w-auto">
          Your order will be delivered lightening quick!
        </h3>
      </div>
    </div>
  );
};

export default OrderPlaced;
