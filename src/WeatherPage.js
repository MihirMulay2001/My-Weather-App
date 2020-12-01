import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'


function WeatherPage({latitude, longitude }){
    return(
      <div>
        <Header />
        <Content latitude = {latitude} longitude={longitude} />
        <Footer />
      </div>
    )
}
export default WeatherPage;