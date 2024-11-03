import { SearchBar } from "@/components/ui/search-bar";
import { cityNameAtom } from "@/stores";
import { useAtom } from "jotai";
import { useState } from "react";

function CommonHeader() {
    const [inputValue, setInputValue] = useState<string>("");
    const [cityName, setCityName] = useAtom(cityNameAtom);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    // 엔터 키가 눌렸을 때의 동작
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            // 입력 필드 초기화
            setInputValue("");
            setCityName(inputValue);
        }
    };

    return (
        <header className="w-full h-20 flex items-center p-6 gap-6">
            <div className="w-1/2 flex items-center justify-start gap-6">
                <div className="h-full flex items-center justify-center gap-2">
                    <img src="/assets/icons/logo.svg" alt="" className="h-10" />
                    <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight text-white">Weather.io</h3>
                </div>
                <SearchBar
                    placeholder="검색할 지역 이름을 영어로 입력하세요."
                    className="flex-1"
                    onInput={handleChange}
                    value={inputValue}
                    onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러
                />
            </div>
        </header>
    );
}

export { CommonHeader };
