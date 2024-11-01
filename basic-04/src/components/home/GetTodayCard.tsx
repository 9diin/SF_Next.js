import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPinned } from "lucide-react";

function GetTodayCard() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl">Today</CardTitle>
                <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex items-center gap-6">
                    <div className="w-[45%] flex items-center justify-center">
                        <img src="/assets/icons/Sunny.svg" alt="" className="h-32 w-32" />
                    </div>
                    <div className="w-[55%] h-full flex flex-col">
                        <div className="w-full flex items-start gap-1">
                            <span className="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">25</span>
                            <span className="text-4xl font-extrabold">&#8451;</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="w-full flex flex-col">
                            <div className="flex items-center justify-start gap-2">
                                <CalendarDays className="h-4 w-4" />
                                <p className="leading-6">2024. 11. 01.</p>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                                <MapPinned className="h-4 w-4" />
                                <p className="leading-6">대한민국 서울</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayCard };
