import React from "react";

const Singleamount = ({ amount }) => {
  return (
    <div className=" rounded-lg shadow-lg  shadow-pink-300 ">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-bold underline decoration-dashed">
          {amount.name}
        </div>
        <div className="collapse-content">
          <p>Clicked for :{amount.person}</p>
          <p>Total-Photo :{amount.photo}</p>
          <p>Releaze in :{amount.releaze}</p>
          <h2 className="text-2xl font-bold">Pay :{amount.amount}</h2>
        </div>
      </div>
    </div>
  );
};

export default Singleamount;
