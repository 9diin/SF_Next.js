"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Button, SearchBar } from "@/shared/ui";

function InitPage() {
    const router = useRouter();
    const { toast } = useToast();

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

    return (
        <div className="page">
            <aside className="page__aside">
                {/* 검색창 UI */}
                <SearchBar placeholder="검색어를 입력하세요." />
                {/* Add New Page 버튼 UI */}
                <Button
                    className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]"
                    onClick={handleCreatePage}
                >
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
                    <Button
                        className="text-[#E79057] bg-transparent border border-[#E79057] hover:bg-[#FFF9F5] w-[180px]"
                        onClick={handleCreatePage}
                    >
                        Add New Page
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default InitPage;
