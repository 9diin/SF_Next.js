import { useState, useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { searchValueAtom, pageAtom, fetchApi } from "@/store";
/** 컴포넌트 */
import { Header, Nav, PaginationFooter } from "@/components/common";
import { ImageCard } from "@/components/home";
import { SearchBar } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { ImageDataType } from "@/types";

function HomePage() {
    const { toast } = useToast();
    const [searchValue] = useAtom(searchValueAtom);
    const [page] = useAtom(pageAtom);
    const [images, setImages] = useState([]); // 사진 데이터를 저장할 상태

    const fetchImages = useCallback(async () => {
        try {
            const res = await fetchApi(searchValue, page);

            if (res.status === 200 && res.data) {
                setImages(res.data.results);
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
    }, [searchValue, page, toast]); // 필요한 의존성들만 포함

    useEffect(() => {
        fetchImages();
    }, [fetchImages]); // 이제 fetchImages가 변경될 때만 실행

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
                    {images.map((image: ImageDataType) => {
                        return <ImageCard data={image} key={image.id} />;
                    })}
                </div>
                <PaginationFooter />
            </div>
        </div>
    );
}

export default HomePage;
