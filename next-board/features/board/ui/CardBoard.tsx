import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
/** FSD 컴포넌트 */
import { MarkdownEditorDialog } from "@/features";
import { Button, Card, Checkbox, LabelDatePicker, Separator } from "@/components/ui";
import { ChevronUp } from "lucide-react";
/** 타입 */
import { Task, BoardContent } from "../types";

interface Props {
    data: BoardContent;
    handleBoards: (data: Task) => void;
}

function CardBoard({ data, handleBoards }: Props) {
    const pathname = usePathname();
    const { toast } = useToast();

    const onDelete = async (id: string | number) => {
        try {
            const { data } = await supabase.from("todos").select("*");

            if (data !== null) {
                data.forEach(async (todo: Task) => {
                    if (todo.id === Number(pathname.split("/")[2])) {
                        const { status } = await supabase
                            .from("todos")
                            .update({
                                boards: todo.boards.filter((board: BoardContent) => board.boardId !== id),
                            })
                            .eq("id", todo.id);

                        if (status === 204) {
                            toast({
                                title: "선택하신 TODO-BOARD가 삭제되었습니다.",
                                description: "새로운 TODO-BOARD를 생성하려면 'Add New Board' 버튼을 눌러주세요!",
                            });
                            getData(); // 데이터 갱신
                        }
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    /** Supabase 데이터베이스의(기존에 생성한 페이지에) 데이터 유무 체크 */
    const getData = async () => {
        const { data } = await supabase.from("todos").select("*"); // 전체 조회

        if (data !== null) {
            data.forEach((task: Task) => {
                if (task.id === Number(pathname.split("/")[2])) {
                    handleBoards(task);
                }
            });
        }
    };

    return (
        <Card className="w-full flex flex-col items-center p-5">
            {/* 게시물 카드 제목 영역*/}
            <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center justify-start gap-2">
                    <Checkbox className="h-5 w-5" />
                    <input type="text" placeholder="제목 없음." className="text-xl outline-none bg-transparent" disabled={true} />
                </div>
                <Button variant={"ghost"} size={"icon"}>
                    <ChevronUp className="text-[#6d6d6d]" />
                </Button>
            </div>
            {/* 캘린더 및 버튼 박스 영역 */}
            <div className="w-full flex items-center justify-between">
                {/* 캘린더 박스 */}
                <div className="flex items-center gap-5">
                    <LabelDatePicker label={"From"} isReadOnly={true} />
                    <LabelDatePicker label={"To"} isReadOnly={true} />
                </div>
                {/* 버튼 박스 */}
                <div className="flex items-center">
                    <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                        Duplicate
                    </Button>
                    <Button variant={"ghost"} className="font-normal text-rose-600 hover:text-rose-600 hover:bg-red-50" onClick={() => onDelete(data.boardId)}>
                        Delete
                    </Button>
                </div>
            </div>
            <Separator className="my-3" />
            {/* Add Contents 버튼 영역 */}
            <MarkdownEditorDialog>
                <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                    Add Contents
                </Button>
            </MarkdownEditorDialog>
        </Card>
    );
}

export { CardBoard };
