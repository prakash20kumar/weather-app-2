import './Weather.css';
const Weather = (props) => {
    return (
        <div className="container">
            <div id="city"> { props.city } ({ props.country })</div>
            <img src={ `http://openweathermap.org/img/wn/${ props.icon }@2x.png` } alt={ props.weather } id="icon" />
            <div className="desc"><b>Weather: </b>{ props.weather } ({ props.desc })</div>
            <div className="desc"><b>Temperature: </b>{ props.temp }° C</div>
            <div className="desc"><b>Min Temperature: </b>{ props.temp_min }° C</div>
            <div className="desc"><b>Max Temperature: </b>{ props.temp_max }° C</div>

            <div className="desc"><b>Wind: </b>{ props.wind } km/h</div>

            <input type="button" value="Delete" onClick={ props.del } className="btn" />
        </div>
    )
}

export default Weather;