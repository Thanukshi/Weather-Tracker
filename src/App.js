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
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&id=524901&appid={API key}`)
  }
  render() {
    return (
      <div>
        <Heading/>
        <Form/>    
      </div>
    )    
  }
}

export default App;
