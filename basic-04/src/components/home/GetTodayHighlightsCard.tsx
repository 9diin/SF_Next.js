import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function GetTodayHighlightsCard() {
    return (
        <Card className="w-full h-fit">
            <CardHeader>
                <CardTitle className="text-xl">Today's Highlights</CardTitle>
                <CardDescription>오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                    <Card className="w-full bg-neutral-100">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                해양 및 조수 데이터
                                <span className="text-neutral-400 font-normal ml-1">Marine and Sailing</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full flex items-center justify-between">
                            <img src="/assets/icons/Waves.png" alt="" className="h-14" />
                            <div className="w-fit grid grid-cols-4 gap-3">
                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-muted-foreground">1회 - 만조</p>
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">04:47 AM</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-muted-foreground">2회 - 간조</p>
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">10:58 AM</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-muted-foreground">3회 - 만조</p>
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">17:14 PM</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-muted-foreground">4회 - 간조</p>
                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">23:21 PM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-fit bg-neutral-50">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                일출/일몰
                                <span className="text-neutral-400 font-normal ml-1">Sunrise & Sunset</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 items-center">
                            <div className="w-full flex items-center gap-2">
                                <img src="/assets/icons/Sunny.svg" alt="" className="h-14" />
                                <div className="flex flex-col">
                                    <p className="text-sm text-muted-foreground">Sunrise</p>
                                    <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">6:46 AM</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-2">
                                <img src="/assets/icons/Clear.svg" alt="" className="h-14" />
                                <div className="flex flex-col">
                                    <p className="text-sm text-muted-foreground">Sunset</p>
                                    <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">5:39 PM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full grid grid-cols-4 gap-6">
                    <Card className="w-full h-fit bg-neutral-50">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                습도
                                <span className="text-neutral-400 font-normal ml-1">Humidity</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <img src="/assets/icons/Humidity.svg" alt="" className="h-10 w-10" />
                            <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                                82
                                <span className="text-lg ml-1">%</span>
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-fit bg-neutral-50">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                기압
                                <span className="text-neutral-400 font-normal ml-1">Pressure</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <img src="/assets/icons/Wind.svg" alt="" className="h-10 w-10" />
                            <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                                1,025
                                <span className="text-lg ml-1">hPa</span>
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-fit bg-neutral-50">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                가시거리
                                <span className="text-neutral-400 font-normal ml-1">Visibility</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <img src="/assets/icons/Fog.svg" alt="" className="h-10 w-10" />
                            <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                                10
                                <span className="text-lg ml-1">km</span>
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-fit bg-neutral-50">
                        <CardHeader>
                            <CardDescription className="font-semibold text-neutral-700">
                                체감온도
                                <span className="text-neutral-400 font-normal ml-1">Feels Like</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <img src="/assets/icons/Hot.svg" alt="" className="h-10 w-10" />
                            <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight flex items-start">
                                18
                                <span className="text-lg ml-[2px] -mt-[2px]">&#8451;</span>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayHighlightsCard };
