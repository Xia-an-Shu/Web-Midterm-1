import React, { useState } from "react";
import Car from "./Car";
import Detail from "./Detail";
import "./CarList.css";

import Row from 'react-bootstrap/Row';

const CarList = () => {

  const [selectedCar, setSelectedCar] = useState(null);

  const [cars] = useState([
    {
      id: 1,
      marca: "Renault",
      linea: "Kangoo",
      modelo: "2017",
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "amarrillo",
      referencia: "New LS"
    },
    {
      id: 2,
      marca: "Chevrolet",
      linea: "Spark",
      modelo: "2018",
      img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "negro",
      referencia: "New LS"
    },
    {
      id: 3,
      marca: "Chevrolet",
      linea: "Sail",
      modelo: "2016",
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "azul",
      referencia: "New LS"
    },
    {
      id: 4,
      marca: "Renault",
      linea: "Sandero",
      modelo: "2020",
      img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "blanco",
      referencia: "New LS"
    },
    {
      id: 5,
      marca: "Nissan",
      linea: "March",
      modelo: "2019",
      img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "carbon",
      referencia: "New LS"
    },
    {
      id: 6,
      marca: "Chevrolet",
      linea: "Tracker",
      modelo: "2018",
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      kilometraje: 37827,
      color: "plata",
      referencia: "New LS"
    }
  ]);

  return (
    <div className="car-list">

      <div className='title'>TuSegundazo.com</div>

      <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className="logo" />

      <hr className="hr-line" />

      <Row>
          <table className="table">
              <thead style={{ backgroundColor: 'black', color: 'white' }} className="table-head">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Linea</th>
                  <th scope="col">Modelo</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((c, i) => (
                  <Car key={i} car={c} onClick={() => {setSelectedCar(c); console.log("Car clicked: " + c.id)}} />
                ))}
              </tbody>
          </table>

          {
            selectedCar && <Detail car={selectedCar} />
          }
          
      </Row>

      <div className="footer">
          Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo
      </div>
            
    </div>
  );
};

export default CarList;