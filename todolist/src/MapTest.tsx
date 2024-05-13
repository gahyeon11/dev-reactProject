import React from "react";

const MapTest = () => {
  const numbers = ["1", "2", "3", "4"];
  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key = {index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};
export default MapTest;
