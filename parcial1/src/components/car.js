import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Car = (props) => {

    return (
      <tr>
        <td>{props.car.marca}</td>
        <td>{props.car.modelo}</td>
        <td>{props.car.linea}</td>
      </tr>
    );
};

export default Car;