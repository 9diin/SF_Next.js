import { CommonHeader } from "@/components/common";
import { GetTodayCard, GetDaysCard, GetTodayHighlightsCard, GetKakaoMapCard, GetHourlyCard } from "@/components/home";
import { useState } from "react";

function HomePage() {
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
    return (
        <div className="page">
            <div className="page__container bg-stone-900">
                <CommonHeader />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                    <div className="w-full flex items-flex justify-start gap-6">
                        <GetTodayCard />
                        <GetHourlyCard />
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
