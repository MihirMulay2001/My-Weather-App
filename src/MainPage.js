import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
function getLocation(e,setLocation){
    e.preventDefault()
    try{
        navigator.geolocation.getCurrentPosition(function (pos){
            setLocation({
                name: "latitude",
                value :pos.coords.latitude,
            })
            setLocation({
                name: "longitude",
                value: pos.coords.longitude,
            })
        })
    }
    catch(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert( "User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert( "Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert( "The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert( "An unknown error occurred.")
                break;
            default:
                alert("Unknown Error Occured")
            }
        }
    }

class MainPage extends Component{
    render(){
        let {latitude, longitude} = this.props.params.state
        let {handleChange, setLocation} = this.props.params
        return(
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row ">
                    <div className="container" >
                        <div className="row" id="inputLocation">
                            <div className="col-lg-12 col-xs-12 " style={{margin:"1vw", padding:"1vw", paddingLeft: "0", color: "rgb(3, 4, 94)"}}>
                                <h3 style={{fontSize: "2.5vh"}}>
                                    Enter the Co-ordinates of the place
                                </h3>
                            </div>
                            <div className="col-lg-5">
                                <input className= "form-control" type="text" name= "latitude" placeholder="latitude" value={latitude || ""} onChange={handleChange} />
                            </div>
                            <div className="col-lg-5">
                                <input className= "form-control" type="text" name="longitude" placeholder="longitude" value={longitude  || ""} onChange={handleChange} />
                            </div>
                            <div className="col-lg-2">
                                <button className="btn" onClick={(e)=>{getLocation(e,setLocation)}}>Get Current Location</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <Link to='/weather'  id="getWeather">Get Weather</Link>
                </div>
            </div>
        )
    }
}
export default MainPage;