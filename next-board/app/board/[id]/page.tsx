import { Button, Input, SearchBar, Progress } from "@/components/ui";
import styles from "./page.module.scss";

function BoardPage() {
    return (
        <div className="page">
            <aside className="page__aside">
                {/* 검색창 UI */}
                <SearchBar placeholder="검색어를 입력하세요." />
                {/* Add New Page 버튼 UI */}
                <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]">
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
                <div className={styles.header}>
                    <div className={styles.heaer__top}>
                        {/* 제목 입력 Input 섹션 */}
                        <Input placeholder="Enter Title Here!" />
                        {/* 진행상황 척도 그래프 섹션 */}
                        <div className="flex items-center justify-start gap-4">
                            <small className="text-sm font-medium leading-none text-[#6D6D6D]">1/10 Completed</small>
                            <Progress className="w-60 h-[10px]" />
                        </div>
                    </div>
                    <div>{/* 캘린더 + Add New Board 버튼 섹션 */}</div>
                </div>
                <div className={styles.body}></div>
            </main>
        </div>
    );
}

export default BoardPage;
