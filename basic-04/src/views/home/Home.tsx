import { useEffect, useState } from "react";
import axios from "axios";
/** 컴포넌트 */
import { CommonHeader } from "@/components/common";
import { GetTodayCard, GetDaysCard, GetTodayHighlightsCard, GetKakaoMapCard, GetHourlyCard } from "@/components/home";
import { Weather } from "@/types";

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

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState<Weather>(defaultWeatherData);
    const [oneWeeks, setOneWeeks] = useState([
        {
            temp: 25,
            date: "01",
            day: "월요일",
            icon: "Sunny",
        },
        {
            temp: 26,
            date: "02",
            day: "화요일",
            icon: "Sunny",
        },
        {
            temp: 27,
            date: "03",
            day: "수요일",
            icon: "Sunny",
        },
        {
            temp: 28,
            date: "04",
            day: "목요일",
            icon: "Sunny",
        },
        {
            temp: 29,
            date: "05",
            day: "금요일",
            icon: "Sunny",
        },
        {
            temp: 30,
            date: "06",
            day: "토요일",
            icon: "Sunny",
        },
        {
            temp: 31,
            date: "07",
            day: "일요일",
            icon: "Sunny",
        },
    ]);

    const fetchApi = async () => {
        const API_KEY = "1c7db76ae67a4a77ace135210243110";
        const BASE_URL = "http://api.weatherapi.com/v1";
        /** https://api.weatherapi.com/v1/current.json?q=seoul&key=1c7db76ae67a4a77ace135210243110 */

        try {
            const res = await axios.get(`${BASE_URL}/forecast.json?q=seoul&days=7&key=${API_KEY}`);
            console.log(res);

            if (res.status === 200) {
                setWeatherData(res.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

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
                        <GetTodayHighlightsCard />
                        <GetDaysCard data={oneWeeks} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
