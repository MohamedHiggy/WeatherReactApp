import React from 'react';
const Show = (props)  => {
      return (
        <div className="info">
            {
                props.Temp && 
                <p className="info_Key">Tempreature : 
                    <span className="info_value">{props.Temp}</span>
                </p>
            }

            {
                props.City && 
                <p className="info_Key">City : 
                    <span className="info_value">{props.City}</span>
                </p>
            }

            {
                props.Country && 
                <p className="info_Key"> Country : 
                    <span className="info_value">{props.Country}</span>
                </p>
            }

            {
                props.Humidity && 
                <p className="info_Key">Humidity : 
                    <span className="info_value">{props.Humidity}</span>
                </p>
            }

            {
                props.description && 
                <p className="info_Key">description : 
                    <span className="info_value">{props.description}</span>
                </p>
            }

            {
                props.error && 
                <p className="info_Key">
                    <span className="info_value">Error : {props.error}</span>
                </p>
            }
        </div>
      );
  }
  export default Show;