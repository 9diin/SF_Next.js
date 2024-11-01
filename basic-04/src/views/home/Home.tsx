import { CommonHeader } from "@/components/common";
import { GetTodayCard } from "@/components/home/GetTodayCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";

function HomePage() {
    const [days, setDays] = useState([
        {
            temp: 25,
            date: "01",
            day: "월요일",
        },
        {
            temp: 26,
            date: "02",
            day: "화요일",
        },
        {
            temp: 27,
            date: "03",
            day: "수요일",
        },
        {
            temp: 28,
            date: "04",
            day: "목요일",
        },
        {
            temp: 29,
            date: "05",
            day: "금요일",
        },
        {
            temp: 30,
            date: "06",
            day: "토요일",
        },
        {
            temp: 31,
            date: "07",
            day: "일요일",
        },
    ]);
    return (
        <div className="page">
            <div className="page__container">
                <CommonHeader />
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="w-1/4 h-full flex flex-col items-flex justify-start gap-6">
                        <GetTodayCard />
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl">7 Days</CardTitle>
                                <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col w-full gap-1">
                                {days.map((item) => {
                                    return (
                                        <div className="w-full flex items-center gap-7" key={item.day}>
                                            <div className="w-fit h-10 flex items-center gap-1">
                                                <img src="/assets/icons/Sunny.svg" alt="" className="h-9 w-9" />
                                                <div className="w-full h-full flex items-start gap-[2px] mt-3">
                                                    <span className="poppins-medium scroll-m-20 text-xl font-semibold tracking-tight">{item.temp}</span>
                                                    <span className="font-extrabold">&#8451;</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-end gap-5">
                                                <small className="text-sm leading-none">{item.date} Nov</small>
                                                <small className="text-sm leading-none">{item.day}</small>
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-3/4"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
