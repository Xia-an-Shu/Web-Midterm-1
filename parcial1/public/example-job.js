import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {

    return (
      <tr>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.name}</td>
        <td>{props.offer.company}</td>
        <td>
          <FormattedNumber value={props.offer.salary}/>
          {/* Visualizar el numero junto a "millon" o "millones" */}
          {props.offer.salary > 1 ? (
            <FormattedMessage id="Millions" />
          ) : (
            <FormattedMessage id="Million" />
          )}
        </td>
        <td>{props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(props.offer.date)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
          />
        </td>
        <td>
          <FormattedNumber value={props.offer.views} />
        </td>
      </tr>
    );
};

export default Job;