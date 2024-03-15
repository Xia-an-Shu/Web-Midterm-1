import React from "react";

const Car = ({ car, onClick }) => {
    return (
      <tr onClick={onClick}>
        <td>{car.id}</td>
        <td>{car.marca}</td>
        <td>{car.linea}</td>
        <td>{car.modelo}</td>
      </tr>
    );
};

export default Car;