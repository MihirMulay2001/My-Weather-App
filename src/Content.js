import React, {Component} from 'react'
import CurrentForecast from './CurrentForecast.js'
import FutureForecast from './FutureForecast.js'
require('dotenv').config();


class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      latitude: props.latitude,
      longitude: props.longitude,
      info : {}
    };
  }
  componentDidMount(){
    const key = process.env.REACT_APP_API_KEY;
    console.log("url" ,process.env.PUBLIC_URL);
    const {latitude, longitude} = this.state
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${key}`)
    .then(res => res.json())
    .then( data => {
      console.log("data" , data);
      this.setState({
      info : data
      })
    })
    .catch(err => { console.log(err , 'occured');})
  }
  render(){
    console.log("this.state.info.current: ",this.state.info.current);
    return(
      <div className= "container-fluid">
        <div className="row" id="allWeather">
          <div className = "col-lg-4 col-xs-12 order-sm-12" id="currentForecast">
              <CurrentForecast props = {this.state.info.current} />
          </div>
          <div className="col-lg-8 col-xs-12 order-sm-1" id="futureForecast">
              <FutureForecast props = {this.state.info} />
          </div>
        </div>
      </div>
    )
  }
}
export default Content;
