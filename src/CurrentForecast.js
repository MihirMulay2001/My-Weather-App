import React from 'react';

function SunTime({props}){
  let suntime = []
  for(const [name,value] of Object.entries(props)){
    const date = new Date(value*1000);
    const time = date.getHours() >= 12 ? "pm" : "am";
    const hours = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12
    const mins = date.getMinutes()
    const seconds = date.getSeconds()
    const icon = name === "sunrise" ? <i className="far fa-sun" style={{color: "#c2bf1f"}}></i> : <i className="far fa-moon"></i>
    suntime.push(<span id="sunTime2">{icon}{hours}:{mins}:{seconds} {time}</span>)
  }
  return (
    <div className="row">
      <div className="col-lg-6 col-xs-6">
        {suntime[0]}
      </div>
      <div className="col-lg-6 col-xs-6">
        {suntime[1]}
      </div>
    </div> 
  )
    
}

function WeatherConditions({props}){
  let id = 0
  let condition = props.map((item)=>{
    return (
      <div key={++id}>
        <span><img alt="img not available" className="WeatherIcon" src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} /></span>
        <span style={{fontSize: "2vh"}}>{item.description.toUpperCase()}</span>
      </div>
    )
  })
  return condition;
}


function CurrentForecast({props}){
  if(props === undefined)
    return (<div></div>)
    return (
      <div className="container-fluid">
        <h3 id="heading2">Today's Forecast</h3> 
        <div>
          <WeatherConditions props ={props.weather } />
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h4 style={{display:"inline"}}>
                <i className="fas fa-temperature-high"></i>
                {props.temp}
              </h4>
            </div>
            <div className="col-lg-6 col-sm-6" style={{padding:".8vw"}}>
              Feels Like {props.feels_like}
            </div>
          </div>
          <SunTime props = {{sunrise : props.sunrise, sunset : props.sunset}} />
          <div className="row">
            <div className="col-lg-12 col-xs-12" >
              <i className="fas fa-cloud" style={{display:"inline", margin: "2.5vh"}}></i><h6 style={{display:"inline"}}>Clouds : {props.clouds} %</h6>
            </div> 
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12" >
              <i className="fas fa-wind" style={{display:"inline", margin: "2.5vh"}}></i><h6 style={{display:"inline"}}>Wind Speed : {props.wind_speed} m/s </h6>
            </div> 
          </div>
          <div className="row">
            <div className= "col-lg-12 col-xs-12">
              Humidity: {props.humidity || "-"} %
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
               Visibility: {props.visibility || "-" }
            </div>
          </div>
          <div className="row">
            <div className= "col-lg-12 col-xs-12">
              Pressure: {props.pressure || "-"}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              Dew Point: {props.dew_point || "-"}
            </div>
          </div>
          
        </div>
      </div>
    )
  }

export default CurrentForecast;
