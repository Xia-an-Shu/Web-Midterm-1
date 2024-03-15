import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Car from "./car";

const CarList = ({ locale }) => {

  const [cars] = useState([
    {
      marca: "TEST",
      linea: "test",
      modelo: "test"
    },
    {
      marca: "TEST",
      linea: "test",
      modelo: "test"
    },
    {
      marca: "TEST",
      linea: "test",
      modelo: "test"
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
                <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
                <FormattedMessage id="City"/>
            </th>
            <th scope="col">
                <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((e, i) => (
            <Car key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;