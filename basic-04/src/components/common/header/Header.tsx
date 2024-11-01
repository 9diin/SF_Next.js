import { SearchBar } from "@/components/ui/search-bar";

function CommonHeader() {
    return (
        <header className="w-full h-20 flex items-center p-6 gap-6">
            <div className="h-full flex items-center justify-center gap-2">
                <img src="/assets/icons/logo.svg" alt="" className="h-10" />
                <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight text-white">Weather.io</h3>
            </div>
            <SearchBar placeholder="검색할 지역 이름을 입력하세요." className="w-1/3" />
        </header>
    );
}

export { CommonHeader };
