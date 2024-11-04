import { useEffect, useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { cityNameAtom } from "@/stores";
/** 컴포넌트 */
import { CommonHeader, GetTodayCard, GetDaysCard, GetTodayHighlightsCard, GetKakaoMapCard, GetHourlyCard } from "@/components";
import { ForecastDay, ForecastTideDay, Weather } from "@/types";

const defaultWeatherData: Weather = {
    current: {
        cloud: 0,
        condition: { text: "", icon: "", code: 0 },
        dewpoint_c: 0,
        dewpoint_f: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        gust_kph: 0,
        gust_mph: 0,
        heatindex_c: 0,
        heatindex_f: 0,
        humidity: 0,
        is_day: 1,
        last_updated: "",
        last_updated_epoch: 0,
        precip_in: 0,
        precip_mm: 0,
        pressure_in: 0,
        pressure_mb: 0,
        temp_c: 0,
        temp_f: 0,
        uv: 0,
        vis_km: 0,
        vis_miles: 0,
        wind_degree: 0,
        wind_dir: "",
        wind_kph: 0,
        wind_mph: 0,
        windchill_c: 0,
        windchill_f: 0,
    },
    location: {
        country: "",
        lat: 0,
        localtime: "",
        localtime_epoch: 0,
        lon: 0,
        name: "",
        region: "",
        tz_id: "",
    },
    forecast: { forecastday: [] },
};

const defaultTideData: ForecastTideDay = {
    astro: {
        is_moon_up: 0,
        is_sun_up: 0,
        moon_illumination: 0,
        moon_phase: "",
        moonrise: "",
        moonset: "",
        sunrise: "",
        sunset: "",
    },
    date: "",
    date_epoch: 0,
    day: {
        avghumidity: 0,
        avgtemp_c: 0,
        avgtemp_f: 0,
        avgvis_km: 0,
        avgvis_miles: 0,
        condition: { text: "", icon: "", code: 0 },
        daily_chance_of_rain: 0,
        daily_chance_of_snow: 0,
        daily_will_it_rain: 0,
        daily_will_it_snow: 0,
        maxtemp_c: 0,
        maxtemp_f: 0,
        maxwind_kph: 0,
        maxwind_mph: 0,
        mintemp_c: 0,
        mintemp_f: 0,
        totalprecip_in: 0,
        totalprecip_mm: 0,
        totalsnow_cm: 0,
        uv: 0,
        tides: [
            {
                tide: [],
            },
        ],
    },
    hour: [],
};

function HomePage() {
    const [cityName, setCityName] = useAtom(cityNameAtom);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);
    const [tideData, setTideData] = useState<ForecastTideDay>(defaultTideData);
    const [weeklyWeatherSummary, setWeeklyWeatherSummary] = useState([]);

    const fetchApi = async () => {
        const API_KEY = "1c7db76ae67a4a77ace135210243110";
        const BASE_URL = "http://api.weatherapi.com/v1";
        /** https://api.weatherapi.com/v1/current.json?q=seoul&key=1c7db76ae67a4a77ace135210243110 */

        try {
            const res = await axios.get(`${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`);

            if (res.status === 200) {
                setWeatherData(res.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchTideApi = async () => {
        const API_KEY = "1c7db76ae67a4a77ace135210243110";
        const BASE_URL = "http://api.weatherapi.com/v1";
        /** https://api.weatherapi.com/v1/current.json?q=seoul&key=1c7db76ae67a4a77ace135210243110 */

        try {
            const res = await axios.get(`${BASE_URL}/marine.json?q=${cityName}&days=1&key=${API_KEY}`);
            console.log(res);

            if (res.status === 200 && res.data) {
                setTideData(res.data.forecast.forecastday[0]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const getOneWeekWeather = async () => {
        const API_KEY = "1c7db76ae67a4a77ace135210243110";
        const BASE_URL = "http://api.weatherapi.com/v1";
        /** https://api.weatherapi.com/v1/current.json?q=seoul&key=1c7db76ae67a4a77ace135210243110 */

        try {
            const res = await axios.get(`${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`);

            if (res.status === 200 && res.data) {
                const newData = res.data.forecast.forecastday.map((item: ForecastDay) => {
                    return { maxTemp: Math.round(item.day.maxtemp_c), minTemp: Math.round(item.day.mintemp_c), date: item.date_epoch, iconCode: item.day.condition.code, isDay: item.day.condition.icon.includes("day") };
                });
                setWeeklyWeatherSummary(newData);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
        fetchTideApi();
        getOneWeekWeather();
    }, [cityName]);

    return (
        <div className="page">
            <div className="page__container bg-stone-900">
                <CommonHeader />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                    <div className="w-full flex items-flex justify-start gap-6">
                        <GetTodayCard data={weatherData} />
                        <GetHourlyCard data={weatherData.forecast.forecastday[0]} />
                        <GetKakaoMapCard />
                    </div>
                    <div className="w-full flex items-center gap-6">
                        <GetTodayHighlightsCard currentData={weatherData} tideData={tideData} />
                        <GetDaysCard data={weeklyWeatherSummary} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
