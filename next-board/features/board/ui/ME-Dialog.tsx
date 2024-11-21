import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Button, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, LabelDatePicker, Separator } from "@/shared/ui";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { BoardContent } from "@/types";

interface Props {
    children: React.ReactNode;
    data: BoardContent;
}

function MarkdownEditorDialog({ children, data }: Props) {
    const { id } = useParams();
    const { toast } = useToast();
    const [title, setTitle] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | undefined>(data.startDate);
    const [endDate, setEndDate] = useState<Date | undefined>(data.endDate);
    const [content, setContent] = useState<string>("**Hello, World!!**");

    const handleInsert = async (selected: string | number) => {
        if (!title || !startDate || !endDate) {
            toast({
                variant: "destructive",
                title: "기입되지 않은 데이터(값)가 있습니다.",
                description: "수정한 TODO-LIST의 마감일을 꼭 지켜주세요!",
            });
            return;
        }

        try {
            /** 생성한 페이지의 전체 데이터를 조회: 특정 TODO-LIST의 id 값을 기준으로 조회 */
            const { data } = await supabase.from("todos").select("*").eq("id", id);

            if (data && data !== null) {
                data[0].boards.forEach((board: BoardContent) => {
                    if (board.boardId === selected) {
                        board.title = title;
                        board.startDate = startDate as Date;
                        board.endDate = endDate as Date;
                        board.content = content;
                    }
                });

                const { status } = await supabase
                    .from("todos")
                    .update({
                        boards: data[0].boards,
                    })
                    .eq("id", id);

                if (status === 204) {
                    toast({
                        title: "TODO-BOARD 콘텐츠가 올바르게 등록되었습니다.",
                        description: "등록한 TODO-BOARD의 마감일을 지켜 하루를 채워가세요!",
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col">
                    <DialogTitle>
                        <div className="flex items-center justify-start gap-2">
                            <Checkbox className="h-5 w-5 min-w-5" />
                            <input type="text" placeholder="게시물의 제목을 입력하세요." className="w-full text-xl outline-none bg-transparent" value={data.title ? data.title : title} onChange={(event) => setTitle(event.target.value)} />
                        </div>
                    </DialogTitle>
                    <DialogDescription>마크다운 에디터를 사용하여 TODO-BOARD를 예쁘게 꾸며보세요.</DialogDescription>
                </DialogHeader>
                {/* 캘린더 박스 */}
                <div className="flex items-center gap-5">
                    <LabelDatePicker label={"From"} propDate={data.startDate} onSetDate={setStartDate} />
                    <LabelDatePicker label={"To"} propDate={data.endDate} onSetDate={setEndDate} />
                </div>
                <Separator />
                {/* 마크다운 에디터 UI 영역 */}
                <MarkdownEditor className="h-[320px]" value={data.content ? data.content : content} onChange={setContent} />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" variant={"outline"}>
                            취소
                        </Button>
                    </DialogClose>
                    <Button type="submit" className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg" onClick={() => handleInsert(data.boardId)}>
                        등록
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { MarkdownEditorDialog };
