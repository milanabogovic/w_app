import { useState } from "react";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Weather from "./components/Weather";
import NA from "./components/NA";
import './css/App.css';

const App = () => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    return ( 
        <div className="App">
            <Form setLocation = { setLocation } setWeather = { setWeather } />
            {
                weather ? 
                    weather.cod === 200 ?
                        (<Weather weather = {weather} />):
                        <NA /> :
                    <Welcome />
            }
        </div>
     );
}
 
export default App;