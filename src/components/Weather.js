// import location from './../img/location.svg';
import './../css/Weather.css';

const Weather = ({ weather }) => {
    return ( 
        <main className="Weather">
            {
                <>
                    <div className='weather__main'>
                        <img src={require(`./../img/${weather.weather[0].icon}.png`)} alt="Weather illustration"></img>
                        {/* <p className='forecast'>{ weather.weather[0].main }</p> */}
                        <h1>{ weather.name }</h1>
                        <p className="temperature">{ Math.floor(weather.main.temp) }&deg;</p>
                    </div>
                    <div className="moreInfo">
                        <div>
                            <small>HUMIDITY</small>
                            <p>{weather.main.humidity}%</p>
                        </div>
                        <div>
                            <small>PRESSURE</small>
                            <p>{weather.main.pressure} mbar</p>
                        </div>
                        <div>
                            <small>WIND</small>
                            <p>{weather.wind.speed} km/h</p>
                        </div>
                    </div>
                </>
            }
        </main>
     );
}
 
export default Weather;