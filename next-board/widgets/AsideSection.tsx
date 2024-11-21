"use client";

import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Button, SearchBar } from "@/shared/ui";
import { useEffect, useState } from "react";
import { Task } from "@/types";

function AsideSection() {
    const router = useRouter();
    const { id } = useParams();
    const { toast } = useToast();
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleCreatePage = async () => {
        /** Supabase의 todo-list 테이블에 ROW 데이터 생성 */
        /** asyn-await 구문이니까 에러핸들링을 추후 try-catch-finally를 사용하자. */
        const { data, status, error } = await supabase
            .from("todos")
            .insert([{ title: "", start_date: null, end_date: null, boards: [] }])
            .select();

        if (status === 201 && data) {
            /** TOAST UI 띄우기 */
            // 설치코드: npx shadcn@latest add toast
            toast({
                title: "새로운 TODO-LIST가 생성되었습니다.",
                description: "Supabase 데이터베이스를 참고해보세요.",
            });
            router.push(`/board/${data[0].id}`);
        }

        if (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "에러가 발생했습니다.",
                description: "개발자 도구창을 확인하세요.",
            });
        }
    };

    const getData = async () => {
        const { data } = await supabase.from("todos").select("*");
        if (data && data !== null) setTasks(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <aside className="page__aside">
            {/* 검색창 UI */}
            <SearchBar placeholder="검색어를 입력하세요." />
            {/* Add New Page 버튼 UI */}
            <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]" onClick={handleCreatePage}>
                Add New Page
            </Button>
            {/* TODO 목록 UI 하나 */}
            <div className="flex flex-col mt-4 gap-2">
                <small className="text-sm font-medium leading-none text-[#A6A6A6]">9Diin의 TODO-BOARD</small>
                <ul className="flex flex-col">
                    {tasks.map((task: Task) => {
                        if (task.id === Number(id)) {
                            return (
                                <li className="bg-[#F5F5F5] min-h-9 flex items-center gap-2 py-2 px-[10px] rounded-sm text-sm cursor-pointer" onClick={() => router.push(`/board/${task.id}`)}>
                                    <div className="h-[6px] w-[6px] rounded-full bg-[#00F38D]"></div>
                                    {task.title ? task.title : <span className="text-neutral-400">등록된 제목이 없습니다.</span>}
                                </li>
                            );
                        } else {
                            return (
                                <li className="min-h-9 flex items-center gap-2 py-2 px-[10px] rounded-sm text-sm cursor-pointer" onClick={() => router.push(`/board/${task.id}`)}>
                                    <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
                                    {task.title ? task.title : <span className="text-neutral-400">등록된 제목이 없습니다.</span>}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </aside>
    );
}

export { AsideSection };
