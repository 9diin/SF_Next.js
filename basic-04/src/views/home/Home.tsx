import { CommonHeader } from "@/components/common";
import { GetTodayCard, GetDaysCard, GetTodayHighlightsCard, GetKakaoMapCard } from "@/components/home";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
                <div className="w-full h-full flex items-center justify-center p-6 gap-6">
                    <div className="w-1/4 h-full flex flex-col items-flex justify-start gap-6">
                        <GetTodayCard />
                        <GetDaysCard data={oneWeeks} />
                    </div>
                    <div className="w-3/4 h-full flex flex-col items-center justify-start gap-6">
                        <GetTodayHighlightsCard />
                        <div className="w-full h-full grid grid-cols-2 gap-6">
                            <Card className="w-full flex-1"></Card>
                            <GetKakaoMapCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
