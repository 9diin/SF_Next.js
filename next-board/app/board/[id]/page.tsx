"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
/** FSD 컴포넌트 */
import { AlertPopup, CardBoard } from "@/features";
import { Button, Progress, LabelDatePicker } from "@/shared/ui";
import { ChevronLeft } from "lucide-react";
/** 스타일 */
import styles from "./page.module.scss";
/** 타입 */
import { Task, BoardContent } from "@/types";

function BoardPage() {
    const { id } = useParams();
    const { toast } = useToast();
    /** Supabase 'todos' 테이블에서 사용될 각 ROW 데이터 COLUMN */
    const [title, setTitle] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [task, setTask] = useState<Task | null>(null);

    /** 저장 버튼 클릭 시 */
    const handleSave = async () => {
        if (!title || !startDate || !endDate) {
            toast({
                variant: "destructive",
                title: "기입되지 않은 데이터(값)가 있습니다.",
                description: "수정한 TODO-LIST의 마감일을 꼭 지켜주세요!",
            });
            return;
        }
        try {
            const { status } = await supabase
                .from("todos")
                .update({
                    title: title,
                    start_date: startDate,
                    end_date: endDate,
                })
                .eq("id", Number(id));

            if (status === 204) {
                toast({
                    title: "TODO-LIST 수정을 완료하였습니다.",
                    description: "수정한 TODO-LIST의 마감일을 꼭 지켜주세요!",
                });
                getData(); // 데이터 갱신
            }
        } catch (error) {
            console.error(error);
        }
    };

    /** Add New Board 버튼을 클릭 시 */
    const handleCreateBoard = () => {
        let newBoards: BoardContent[] = [];
        const boardContent = {
            boardId: nanoid(),
            isCompleted: false,
            title: "",
            startDate: "",
            endDate: "",
            content: "",
        };

        /** Supabase에 만약 데이터가 있을 때 */
        if (task !== null && task.boards.length > 0) {
            newBoards = [...task.boards];
            newBoards.push(boardContent);
            updateBoards(newBoards);
        } else if (task !== null && task?.boards.length === 0) {
            /** Supabase에 만약 데이터가 없을 때 */
            newBoards.push(boardContent);
            updateBoards(newBoards);
        }
    };

    const updateBoards = async (newBoards: BoardContent[]) => {
        try {
            const { status, error } = await supabase.from("todos").update({ boards: newBoards }).eq("id", Number(id));

            if (status === 204) {
                toast({
                    title: "새로운 TODO-BOARD가 생성되었습니다.",
                    description: "생성한 TODO-BOARD를 예쁘게 꾸며주세요.",
                });
                getData(); // 데이터 갱신
            }

            if (error) {
                console.error(error);
                toast({
                    variant: "destructive",
                    title: "에러가 발생했습니다.",
                    description: "개발자 도구창을 확인하세요.",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    /** Supabase 데이터베이스의(기존에 생성한 페이지에) 데이터 유무 체크 */
    const getData = async () => {
        const { data } = await supabase.from("todos").select("*").eq("id", id);

        console.log(data);
        if (data !== null) {
            setTask(data[0]);
            setTitle(data[0].title);
            setStartDate(data[0].start_date);
            setEndDate(data[0].end_date);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles[`header__btn-box`]}>
                    <Button variant={"outline"} size={"icon"}>
                        <ChevronLeft />
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant={"secondary"} onClick={handleSave}>
                            저장
                        </Button>
                        <AlertPopup>
                            <Button className="text-rose-600 bg-red-50 hover:bg-rose-50">삭제</Button>
                        </AlertPopup>
                    </div>
                </div>
                <div className={styles.header__top}>
                    {/* 제목 입력 Input 섹션 */}
                    <input
                        type="text"
                        placeholder="Enter Title Here!"
                        className={styles.header__top__input}
                        onChange={(event) => setTitle(event.target.value)} // title 상태값 갱신
                        value={title}
                    />
                    {/* 진행상황 척도 그래프 섹션 */}
                    <div className="flex items-center justify-start gap-4">
                        <small className="text-sm font-medium leading-none text-[#6D6D6D]">1/10 Completed</small>
                        <Progress className="w-60 h-[10px]" value={33} />
                    </div>
                </div>
                {/* 캘린더 + Add New Board 버튼 섹션 */}
                <div className={styles.header__bottom}>
                    <div className="flex items-center gap-5">
                        <LabelDatePicker label={"From"} propDate={startDate} onSetDate={setStartDate} />
                        <LabelDatePicker label={"To"} propDate={endDate} onSetDate={setEndDate} />
                    </div>
                    <Button className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg" onClick={handleCreateBoard}>
                        Add New Board
                    </Button>
                </div>
            </div>
            <div className={styles.body}>
                {task?.boards.length === 0 ? (
                    <div className={styles.body__noData}>
                        {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 없을 경우 */}
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">There is no board yet.</h3>
                        <small className="text-sm font-medium leading-none text-[#6D6D6D] mt-3 mb-7">Click the button and start flashing!</small>
                        <button onClick={handleCreateBoard}>
                            <Image src="/assets/images/button.svg" width={74} height={74} alt="rounded-button" />
                        </button>
                    </div>
                ) : (
                    <div className={styles.body__isData}>
                        {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 있을 경우 */}
                        {task?.boards.map((board: BoardContent) => {
                            return <CardBoard key={board.boardId} data={board} onBoards={setTask} />;
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default BoardPage;
