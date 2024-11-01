import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <div className="bg-green-600 p-4 flex justify-between">
      <div>
        <span className="font-bold text-white">Logo</span>
      </div>

      <div>
        <NavItem text="Products" url="/products/" />
      </div>
    </div>
  );
};

export default Navigation;
