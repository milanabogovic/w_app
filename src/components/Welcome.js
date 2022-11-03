import logo from "./../img/logo.png";
import "./../css/Welcome.css";

const Welcome = () => {
    return ( 
        <div className="Welcome">
            <img src={logo}></img>
            <h1>Weather App</h1>
            <p>Enter the location name and receive weather details for the location.</p>
        </div>
     );
}
 
export default Welcome;