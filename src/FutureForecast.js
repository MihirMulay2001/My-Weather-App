import React from 'react'
import DailyData from './DailyData.js'
import HourlyData from './HourlyData.js'


function FutureForecast({props}){
  if(props.daily === undefined || props.hourly === undefined)
    return (<div></div>)
  let dailyData = [], id =0
  for(const data of props.daily){
    dailyData.push(<DailyData key={++id} props= {data} />)
  }
  let hourlyData =[]
  for(const data of props.hourly){
    hourlyData.push(<HourlyData key={++id} props={data} />)
  }
  return(
    <div className="row">
      <div className="col-lg-2 col-xs-2" id="future-menu">
        <ul className="nav nav-pills flex-column" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle= "tab" href = "#daily"> Daily</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle= "tab" href = "#hourly"> Hourly</a>
            </li>
        </ul>
      </div>
      <div className="col-lg-9 col-xs-8">
          <div className="tab-content">
              <div className="tab-pane active" id="daily">
                  <h3>Daily</h3>
                  <ul className="list-group">
                    {dailyData}
                  </ul>
              </div>
              <div className="tab-pane" id="hourly">
                  <h3>Hourly</h3>
                  <ul className="list-group">
                    {hourlyData}
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

export default FutureForecast;
