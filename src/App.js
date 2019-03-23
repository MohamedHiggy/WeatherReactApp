import React, { Component } from 'react';
import Show from './Components/Show'
import Form from './Components/Form'
const weather_API_Key = "1b6780f0fa9b90cb6c78ef8a883e9588";
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

  state = {
    Temp:'',
    City:'',
    Country:'',
    Humidity:'',
    description:'',
    error:''
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weather_API_Key}`)
    const DATA = await API.json();
    if(city && country)
    {
      this.setState({
        Temp:DATA.main.temp,
        City:DATA.name,
        Country:DATA.sys.country,
        Humidity:DATA.main.humidity,
        description:DATA.weather[0].description,
        error:''
      })
    }
    else
    {
      this.setState({
          Temp:'',
          City:'',
          Country:'',
          Humidity:'',
          description:'',
          error:'Please enter Data'
      })
    }
  }
  render() {
    return (
      <div className="App">
          <div className="container">
            <p className="P_App">Weather App</p>
            <Form getWeather={this.getWeather}/>
            <Show
              Temp={this.state.Temp}
              City={this.state.City}
              Country={this.state.Country}
              Humidity={this.state.Humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
      </div>
    );
  }
}
export default App;