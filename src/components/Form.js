import './../css/Form.css';
import search from './../img/search.png';

const Form = ({ setLocation, setWeather }) => {
    const weatherLookup = (location) => {
        setLocation(location);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=[appid]`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
                document.activeElement.value="";
                document.activeElement.blur();
            });
    }
    return ( 
        <div className="Form">
            <form onSubmit={ e => { e.preventDefault();  weatherLookup(e.target.children[0].value); } }>
                <input type="text" placeholder="Search Location"></input>
                <img src= { search }></img>
            </form>
        </div>
     );
}
 
export default Form;
