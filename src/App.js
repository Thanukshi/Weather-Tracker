import React from 'react';
import Heading from './components/Heading';
import Form from './components/Form';

const api_key = "340f285ba2462b49429ef9f10d8473ea";

class App extends React.Component {
  state = {
    temperature: "",
    city : "",
    country : "",
    humidity : "",
    pressure : "",
    icon : "",
    description : "", 
    error : "",
  }

  getWhether = async (e) =>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&id=524901&appid=${api_key}`);

    const response = await api_call.json();
    if(city && country){
      this.setState({
        temperature:response.main.temperature,
        city: response.name, 
        country: response.sys.country,
        humidity:response.main.humidity,
        pressure:response.main.pressure,
        icon:response.weather[0].icon,
        description:response.weather[0].description,
        error : ""
    })
    }else{
      this.setState({
        error : "Please fill out input fields..."
      })
    }
  } 
  render() {
    return (
      <div>
        <Heading/>
        <Form loadWeather={this.getWhether}/>    
      </div>
    )    
  }
}

export default App;
