import React from "react";
import "./Detail.css"

import { FormattedMessage } from "react-intl";

const Detail = ( {car} ) => {

    return (
        <div className="square">
            
            <div className="square-img-name">
                <div className="square-name"> {car.marca + " " + car.linea} </div>
                <img className="square-img" src={car.imagen} alt={car.marca} />
            </div>
            <p>
                &rarr; <FormattedMessage id="Kilometraje"/>: {car.kilometraje}
                <br></br>
                &rarr; <FormattedMessage id="Color"/>: {car.color}
                <br></br>
                &rarr; <FormattedMessage id="Referencia"/>: {car.referencia}
            </p>
            
        </div>
    );  
};

export default Detail;