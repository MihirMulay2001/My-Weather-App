import React, {Component} from 'react'
import MainPage from './MainPage'
import WeatherPage from './WeatherPage'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component{
  constructor(){
    super()
    this.state={
      latitude: 0,
      longitude: 0,
    }
    this.mainPage = this.mainPage.bind(this)
    this.weatherPage = this.weatherPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }
  setLocation({name, value}){
    this.setState({
      [name] : parseFloat(value.toFixed(7))
    })
  }
  handleChange(e){
    const {name, value} = e.target
    this.setState({
        [name] : value
      }
    )
  }
  weatherPage(){
    return(
      <WeatherPage latitude = {this.state.latitude} longitude={this.state.longitude} />
    )
  }
  mainPage(){
    return (
      <MainPage params={this} />
    )
  }
  render(){
    return(
      <div>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Switch>
            <Route exact path='/' component={this.mainPage}/>
            <Route path='/weather' component= {this.weatherPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
