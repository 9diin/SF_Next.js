import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface WeatherInfo {
    temp: number;
    date: string;
    day: string;
    icon: string;
}
interface Props {
    data: WeatherInfo[];
}

function GetDaysCard({ data }: Props) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl">7 Days</CardTitle>
                <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col w-full gap-1">
                {data.map((item: WeatherInfo) => {
                    return (
                        <div className="w-full flex items-center gap-7" key={item.day}>
                            <div className="w-fit h-10 flex items-center gap-1">
                                <img src={`/assets/icons/${item.icon}.svg`} alt="" className="h-9 w-9" />
                                <div className="w-full h-full flex items-start gap-[2px] mt-3">
                                    <span className="poppins-medium scroll-m-20 text-xl font-semibold tracking-tight">{item.temp}</span>
                                    <span className="font-extrabold">&#8451;</span>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-end gap-5 mb-1">
                                <small className="text-base leading-none">{item.date} Nov</small>
                                <small className="text-base leading-none">{item.day}</small>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}

export { GetDaysCard };
