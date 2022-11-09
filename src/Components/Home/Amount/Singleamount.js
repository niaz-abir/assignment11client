import React from "react";

const Singleamount = ({ amount }) => {
  return (
    <div className="border-2 border-purple-600">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">{amount.name}</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Singleamount;
