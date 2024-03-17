import React from "react";
import "./Car.css";

const Car = ({ car, onClick }) => {
    return (
      <tr onClick={onClick} className="table-row">
        <td className="car-id car-text">{car.id}</td>
        <td className="car-text">{car.marca}</td>
        <td className="car-text">{car.linea}</td>
        <td className="car-text">{car.modelo}</td>
      </tr>
    );
};

export default Car;