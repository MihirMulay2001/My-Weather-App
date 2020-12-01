import React from 'react'

const days = ['Sun', 'Mon', 'Tue', 'Wed' , 'Thur', 'Fri', 'Sat'];
const sunmove = ['sunrise', 'sunset'];


export default function DailyData({props}){
    let data = []
    const day = new Date(props.dt*1000)
    sunmove.forEach((sun)=>{
      const date = new Date(props[sun]*1000);
      const time = date.getHours() >= 12 ? "pm" : "am";
      const hours = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12
      const mins = date.getMinutes()
      const seconds = date.getSeconds()
      data.push(<div>{sun==="sunrise" ? <i className="fas fa-sun" style={{color: "#c2bf1f"}}></i> : <i className="far fa-moon"></i>}  {hours} {mins} {seconds} {time}</div>)
    })
    return(
      <li className="list-group-item" id="daily-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-6">
              <div className="row">
                <div className="col-lg-12 col-xs-12">
                  <h5 id="day">{days[day.getDay()]}</h5>
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
            <div className="col-lg-6 col-xs-6">
              <div className="row">
                <div className="container d-flex justify-content-center">
                  <div className="temperatures" >{props.temp.max}</div>
                  <div className="temperatures"><h4 >{props.temp.day}</h4></div>
                  <div className="temperatures" >{props.temp.min}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xs-6">
                  <div>{data[0]}</div>
                </div>
                <div className="col-lg-6 col-xs-6">
                  <div>{data[1]}</div>
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