import React,{useState} from 'react';
import './App.css';

function App() {
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          
          setResult(Math.round(celcius)+"°C\n"+city);
        }
      ).catch(error => console.log(error))
      setCity("");
  }
  return (
    <div class="main-app"> 
    <div class="main-container">
       <div class="result-container">
        <center>
          <div class="result-tab">
              <h1 >The Weather App</h1>
              <div>
                 <h1>{result}</h1> 
              </div>
          </div>
              <br/>
              <form onSubmit={submitHandler} class="query-container">
                <input size="30" type="text" name="city" placeholder='Enter' onChange={changeHandler} value={city}/>
                <input type="submit" value="Get Weather" />
              </form>
          
      
        </center>
      </div>
    <div>
      <img src="https://i0.wp.com/smashfreakz.com/wp-content/uploads/2017/10/Flat-Weather-App-UI-18.jpg?resize=600%2C450" alt='weather' width="300" height="300"></img>
    </div>
    </div>
    </div>
  );
}

export default App