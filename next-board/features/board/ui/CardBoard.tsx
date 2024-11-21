import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
/** FSD 컴포넌트 */
import { MarkdownEditorDialog } from "@/features";
import { Button, Card, Checkbox, LabelDatePicker, Separator } from "@/shared/ui";
import { ChevronUp } from "lucide-react";
/** 타입 */
import { Task, BoardContent } from "@/types";

interface Props {
    data: BoardContent;
    onBoards: (data: Task) => void;
}

function CardBoard({ data, onBoards }: Props) {
    const { id } = useParams();
    const { toast } = useToast();
    const [startDate, setStartDate] = useState<Date | undefined>(new Date()); // 필수 값 처리 예정
    const [endDate, setEndDate] = useState<Date | undefined>(new Date()); // 필수 값 처리

    /** TODO-LIST의 개별 TODO-BOARD 삭제 */
    const handleDelete = async (selected: string | number) => {
        try {
            const { data } = await supabase.from("todos").select("*").eq("id", Number(id));

            if (data !== null) {
                const { status } = await supabase
                    .from("todos")
                    .update({
                        boards: data[0].boards.filter((board: BoardContent) => board.boardId !== selected),
                    })
                    .eq("id", Number(id));
                if (status === 204) {
                    toast({
                        title: "선택하신 TODO-BOARD가 삭제되었습니다.",
                        description: "새로운 TODO-BOARD를 생성하려면 'Add New Board' 버튼을 눌러주세요!",
                    });
                    getData(); // 데이터 갱신
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    /** Supabase 데이터베이스의(기존에 생성한 페이지에) 데이터 유무 체크 */
    const getData = async () => {
        const { data } = await supabase.from("todos").select("*").eq("id", id); // 전체 조회

        if (data !== null) {
            onBoards(data[0]);
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
                    <LabelDatePicker label={"From"} isReadOnly={true} propDate={startDate} onSetDate={setStartDate} />
                    <LabelDatePicker label={"To"} isReadOnly={true} propDate={endDate} onSetDate={setEndDate} />
                </div>
                {/* 버튼 박스 */}
                <div className="flex items-center">
                    <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                        Duplicate
                    </Button>
                    <Button variant={"ghost"} className="font-normal text-rose-600 hover:text-rose-600 hover:bg-red-50" onClick={() => handleDelete(data.boardId)}>
                        Delete
                    </Button>
                </div>
            </div>
            <Separator className="my-3" />
            {/* Add Contents 버튼 영역 */}
            <MarkdownEditorDialog data={data}>
                <Button variant={"ghost"} className="font-normal text-[#6D6D6D]">
                    Add Contents
                </Button>
            </MarkdownEditorDialog>
        </Card>
    );
}

export { CardBoard };
