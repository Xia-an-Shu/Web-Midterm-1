import React from "react";
import "./Detail.css"

const Detail = (props) => {

    return (
        <div className="square">
            
            <div className="square-img-name">
                <div className="square-name"> {props.car.marca + " " + props.car.linea} </div>
                <img src={props.car.img} alt={props.car.marca} />
            </div>
            <p>
                &rarr; Kilometraje: {props.car.kilometraje}
                <br></br>
                &rarr; Color: {props.car.color}
                <br></br>
                &rarr; Referencia: {props.car.referencia}
            </p>
        </div>
    );  
};

export default Detail;