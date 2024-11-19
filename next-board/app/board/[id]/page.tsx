"use client";

import Image from "next/image";
import { Button, Card, SearchBar, Progress, LabelDatePicker, Separator, Checkbox } from "@/components/ui";
import { ChevronLeft, ChevronUp } from "lucide-react";
import styles from "./page.module.scss";

function BoardPage() {
    // const createBoard = () => {};

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
                    <div className={styles[`header__btn-box`]}>
                        <Button variant={"outline"} size={"icon"}>
                            <ChevronLeft />
                        </Button>
                        <Button variant={"secondary"}>저장</Button>
                    </div>
                    <div className={styles.header__top}>
                        {/* 제목 입력 Input 섹션 */}
                        <input type="text" placeholder="Enter Title Here!" className={styles.header__top__input} />
                        {/* 진행상황 척도 그래프 섹션 */}
                        <div className="flex items-center justify-start gap-4">
                            <small className="text-sm font-medium leading-none text-[#6D6D6D]">1/10 Completed</small>
                            <Progress className="w-60 h-[10px]" value={33} />
                        </div>
                    </div>
                    {/* 캘린더 + Add New Board 버튼 섹션 */}
                    <div className={styles.header__bottom}>
                        <div className="flex items-center gap-5">
                            <LabelDatePicker label={"From"} />
                            <LabelDatePicker label={"To"} />
                        </div>
                        <Button className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg">
                            Add New Board
                        </Button>
                    </div>
                </div>
                <div className={styles.body}>
                    {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 없을 경우 */}
                    {/* <div className={styles.body__noData}>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">There is no board yet.</h3>
                        <small className="text-sm font-medium leading-none text-[#6D6D6D] mt-3 mb-7">
                            Click the button and start flashing!
                        </small>
                        <button onClick={createBoard}>
                            <Image src="/assets/images/button.svg" width={74} height={74} alt="rounded-button" />
                        </button>
                    </div> */}
                    {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 있을 경우 */}
                    <div className={styles.body__isData}>
                        <Card className="w-full flex flex-col items-center p-5">
                            {/* 게시물 카드 제목 영역*/}
                            <div className="w-full flex items-center justify-between mb-4">
                                <div className="flex items-center justify-start gap-2">
                                    <Checkbox className="h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="제목을 입력하세요."
                                        className="text-xl outline-none"
                                        disabled={true}
                                    />
                                </div>
                                <Button variant={"ghost"} size={"icon"}>
                                    <ChevronUp className="text-[#6d6d6d]" />
                                </Button>
                            </div>
                            {/* 캘린더 및 버튼 박스 영역 */}
                            <div className="w-full flex items-center justify-between">
                                {/* 캘린더 박스 */}
                                <div className="flex items-center gap-5">
                                    <LabelDatePicker label={"From"} />
                                    <LabelDatePicker label={"To"} />
                                </div>
                                {/* 버튼 박스 */}
                                <div className="flex items-center">
                                    <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                                        Duplicate
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="font-normal text-rose-600 hover:text-rose-600 hover:bg-red-50"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            {/* Add Contents 버튼 영역 */}
                            <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                                Add Contents
                            </Button>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BoardPage;
