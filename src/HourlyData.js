import React from 'react'

export default function HourlyData({props}){
    const day = new Date(props.dt*1000)
    const time = day.getHours() >= 12 ? "pm" : "am";
    const hours = day.getHours() % 12 === 0 ? 12 : day.getHours() % 12
    return (
      <li className="list-group-item" id="hourly-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-8">
              <div className="row">
                <div className="col-lg-12 col-xs-12">
                  <h5>{hours}{time}</h5>
                </div>
              </div>
              <div className="row">
                <div className= "col-lg-6 col-xs-6">
                    Humidity: {props.humidity || "-"} %
                  </div>
                  <div className="col-lg-6 col-xs-6">
                  Visibility: {props.visibility || "-" }
                  </div>
                </div>
                <div className="row">
                  <div className= "col-lg-6 col-xs-6">
                    Pressure: {props.pressure || "-"}
                  </div>
                  <div className="col-lg-6 col-xs-6">
                    Dew Point: {props.dew_point || "-"}
                  </div>
                </div>
            </div>
            <div className="col-lg-4 col-xs-4">
              <div className="row">
                <div className="col-lg-12 col-xs-12">
                  <h3>{props.temp}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-xs-4">
                  <i className="fas fa-cloud-rain"></i><h6>{Math.round(props.pop * 100)} % </h6>
                </div>
                <div className="col-lg-4 col-xs-4">
                  <i className="fas fa-cloud"></i><h6>{props.clouds} %</h6> 
                </div>
                <div className="col-lg-4 col-xs-4">
                  <i className="fas fa-wind"></i><h6>{props.wind_speed} m/s </h6>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

  /*
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "rain": {
        "1h": 2.46
      }
  */
