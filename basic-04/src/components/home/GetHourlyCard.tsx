import { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components";
import { ForecastDay, hourlyData } from "@/types";

function useFormattedTime(time: string) {
    return useMemo(() => {
        const [date, hourString] = time.split(" ");
        const [hour, minute] = hourString.split(":").map(Number);

        let formattedTime;
        if (hour === 0) {
            formattedTime = "오전 0시"; // 오전 0시
        } else if (hour === 12) {
            formattedTime = "낮 12시"; // 낮 12시
        } else {
            const isAM = hour < 12; // 오전인지 확인
            const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12시간 형식으로 변환
            const period = isAM ? "오전" : "오후"; // 오전/오후 구분
            formattedTime = `${period} ${formattedHour}시`;
        }

        return formattedTime;
    }, [time]);
}

interface Props {
    data: ForecastDay;
}

function GetHourlyCard({ data }: Props) {
    /** 추후에 스켈레톤 ui로 변경 */
    if (!data || !data.hour) {
        return <div>데이터를 불러오는 중입니다...</div>;
    }

    return (
        <Card className="flex-1 max-w-[calc(50%-48px)]">
            <CardHeader>
                <CardTitle className="text-xl">Hourly</CardTitle>
                <CardDescription>오늘의 시간대별 날씨를 조회하고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
                {data.hour.map((item: hourlyData) => {
                    const formattedTime = useFormattedTime(item.time);
                    return (
                        <Card className="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50" key={item.time}>
                            <span className="text-sm">{formattedTime}</span>
                            {item.condition.icon.includes("day") ? <img src={`/assets/icons/${item.condition.code}d.svg`} alt="" className="h-14 w-14" /> : <img src={`/assets/icons/${item.condition.code}n.svg`} alt="" className="h-14 w-14" />}
                            <div className="w-full flex items-start justify-center">
                                <span className="poppins-medium scroll-m-20 text-xl font-medium tracking-tight">{Math.round(item.temp_c)}</span>
                                <span className="text-[13px] ml-[1px] mt-[1px] font-medium">&#8451;</span>
                            </div>
                        </Card>
                    );
                })}
            </CardContent>
        </Card>
    );
}

export { GetHourlyCard };
