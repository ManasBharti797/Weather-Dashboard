import axios from "axios"
import { useEffect , useState} from 'react'
import cloudy from '../assets/images/cloudy.png'
import loading from '../assets/images/loading.gif'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import sunny from '../assets/images/sunny.png'
import { API_KEY } from '../apikey'
import "./weatherApp.css";
import { IconDropletHalfFilled, IconMapPinFilled , IconSearch, IconWind} from "@tabler/icons-react"
import dayjs from "dayjs";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const weatherImages = {
    Clear : sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
}

const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right, #57d6d4, #f71eec)",
    Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
    Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
};

const WeatherApp  = function () {
    const [city, setCity] = useState("New Delhi");
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
       fetchResult(); 
    },[city])

    const fetchResult = async()=>{
        setIsLoading(true);
        const response = await axios.get(API_URL, {
            params: { q: city, appid: API_KEY, units: "metric" }
        });
        console.log("Response", response);
        if(response?.data) {
            setData(response.data);
        } else {
            setData({notFound: "Not Found"});
        }
        setIsLoading(false);
    }; 

    const handleInputChange = (e) => {
        let value = e.target.value;
        if(value.trim() !== 0){
            setCity(value);
        }
    }

    const weatherName = data?.weather?.[0]?.main;
    const backgroundImage = data.weather ? backgroundImages[weatherName] : backgroundImages["Clear"];

    const today = new Date();
    const date = dayjs(today).format("DD MMM YY");

    return (
        <div className="container" style={{ backgroundImage }}>
            <div className="weather-app" style={{ backgroundImage: backgroundImage.replace("to right", "to top") }}>

                {/*..............search bar.........*/}
                <div className="search">
                    <div className="search-top">
                        <IconMapPinFilled/>
                        {city && <p>{city}</p>}
                    </div>
                    <div className="search-bar">
                        <input className="search-bar" type="text" onChange={handleInputChange} placeholder="Enter Location"/>
                        <IconSearch color="#333"/>
                    </div>
                </div>

                {isLoading ? (
                    <img className="loader" src={loading} alt="loader"/>
                ) : data.notFound ? (
                    <p>Not Found</p>
                ) : ( 
                    <>
                    <div className="weather">
                        <img src={weatherImages[weatherName ?? "Clear"]}/>
                        <div className="weather-type">
                            {weatherName && <p>{weatherName}</p>}
                        </div>
                        <div className="weather-temp">
                            {data?.main && <p>{Math.floor(data.main.temp)}°</p>}
                        </div>
                    </div>
                    <div className="weather-date">
                        <p>{date}</p>
                    </div>
                    <div className="weather-data">
                        <div className="Humidity">
                            <h4>Humidity</h4>
                            <IconDropletHalfFilled/>
                            {data?.main?.humidity && <p>{data.main.humidity}<span className="unit">%</span></p>}
                        </div>
                        <div className="wind">
                            <h4>Wind</h4>
                            <IconWind/>
                            {data?.wind && <p>{data.wind.speed}<span className="unit"> km/h</span></p>}
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default WeatherApp
