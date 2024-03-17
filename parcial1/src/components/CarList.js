import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Car from "./Car";
import Detail from "./Detail";
import "./CarList.css";

import { FormattedMessage } from "react-intl";

const CarList = () => {

  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error(error));
  }, []);

  const handleCarClick = (car) => {
    fetch(`http://localhost:3001/cars/${car.id}`)
      .then(response => {
        if (response.status === 404) {
          console.error('The car with the given id was not found.');
          return;
        }
        return response.json();
      })
      .then(data => setSelectedCar(data))
      .catch(error => console.error(error));
  };

  return (

    <div className="car-list">

      <div className='title'>TuSegundazo.com</div>

      <hr className="hr-line-first" />  

      <img src={process.env.PUBLIC_URL + "/images/banner.png"} alt="logo" className="logo" />

      <hr className="hr-line" />

      <div className="table-detail-container">

        <Table hover className="table">
          <thead className="table-head">
            <tr>
              <th>#</th>
              <th><FormattedMessage id="Marca"/></th>
              <th><FormattedMessage id="Linea"/></th>
              <th><FormattedMessage id="Modelo"/></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((c, i) => (
                <Car key={i} car={c} onClick={() => { handleCarClick(c); console.log("Car clicked: " + c.id) }} />
            ))}
          </tbody>
        </Table>

        {
          selectedCar && <Detail car={selectedCar} />
        }

      </div>

      <div className="footer">
          Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo
      </div>
            
    </div>
  );
};

export default CarList;