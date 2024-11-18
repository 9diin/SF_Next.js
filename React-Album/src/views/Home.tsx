import axios from "axios";
import { useToast } from "@/hooks/use-toast";

import { Header, Nav, PaginationFooter } from "@/components/common";
import { ImageCard } from "@/components/home";
import { SearchBar } from "@/components/ui";
import { useEffect, useState } from "react";

function HomePage() {
    const [images, setImages] = useState([]);
    const { toast } = useToast();

    const fetchApi = async () => {
        const API_KEY = "xdPpSL_raqECA-2yXGgl6syIXf22TEyB3ooFpYeghQA";
        const BASE_URL = "https://api.unsplash.com/search/photos";

        const page = 1;
        const searchValue = "korea";
        const per_page = 30;

        try {
            const res = await axios.get(
                `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=${per_page}&client_id=${API_KEY}`
            );

            if (res.status === 200 && res.data) {
                setImages(res.data.results);
                /** 추후에 비동기처리 해줄지 말지 체크! */
                toast({
                    title: "Unsplash API 호출 성공!!",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Unsplash API 호출 실패!!",
                    description: "API 호출을 위한 필수 파라미터 값을 체크해보세요!",
                });
            }

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Nav />
                <div className="page__container__wallpaper">
                    <img src="src/assets/images/wallpaper.png" alt="" className="bg-image" />
                    <div className="search-box">
                        <h1 className="scroll-m-20 text-4xl text-white font-extrabold tracking-tight">
                            프로젝트 02: 오픈 API를 활용한 이미지 검색 사이트 만들기
                        </h1>
                        <div className="flex flex-col w-full mt-5 mb-2">
                            <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                                인터넷 시각자료 출처입니다.
                            </h4>
                            <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                                모든 지역에 있는 크리에이터들의 지원을 받습니다.
                            </h4>
                        </div>
                        {/* 검색창 컴포넌트 */}
                        <SearchBar placeholder="원하는 이미지를 검색하세요." />
                    </div>
                </div>
                <div className="page__container__contents">
                    {images.map((image) => {
                        return <ImageCard data={image} />;
                    })}
                </div>
                <PaginationFooter />
            </div>
        </div>
    );
}

export default HomePage;
