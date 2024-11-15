import { Header, Nav } from "@/components/common";
import { SearchBar } from "@/components/ui";

function HomePage() {
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
            </div>
        </div>
    );
}

export default HomePage;
