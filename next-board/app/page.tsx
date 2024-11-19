"use client";

import { useRouter } from "next/navigation";
import { Button, SearchBar } from "@/components/ui";

function InitPage() {
    const router = useRouter();

    return (
        <div className="page">
            <aside className="page__aside">
                {/* 검색창 UI */}
                <SearchBar placeholder="검색어를 입력하세요." />
                {/* Add New Page 버튼 UI */}
                <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]" onClick={() => router.push("/board/1")}>
                    Add New Page
                </Button>
                {/* TODO 목록 UI 하나 */}
                <div className="flex flex-col mt-4 gap-2">
                    <small className="text-sm font-medium leading-none text-[#A6A6A6]">9Diin의 TODO-BOARD</small>
                    <ul className="flex flex-col">
                        <li className="flex items-center gap-2 py-2 px-[10px] bg-[#F5F5F5] rounded-sm text-sm">
                            <div className="h-[6px] w-[6px] rounded-full bg-[#00F38D]"></div>
                            Enter Title
                        </li>
                        <li className="flex items-center gap-2 py-2 px-[10px] bg-[#F5F5F5] rounded-sm text-sm">
                            <div className="h-[6px] w-[6px] rounded-full bg-[#00F38D]"></div>
                            Enter Title
                        </li>
                    </ul>
                </div>
            </aside>
            <main className="page__main">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-5 mb-6">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">How to start:</h3>
                        <div className="flex flex-col items-center gap-3">
                            <small className="text-sm font-normal leading-none">1. Create a page</small>
                            <small className="text-sm font-normal leading-none">2. Add boards to page</small>
                        </div>
                    </div>
                    <Button className="text-[#E79057] bg-transparent border border-[#E79057] hover:bg-[#FFF9F5] w-[180px]" onClick={() => router.push("/board/1")}>
                        Add New Page
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default InitPage;
