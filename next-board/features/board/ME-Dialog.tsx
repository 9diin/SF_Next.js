import {
    Button,
    Checkbox,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    LabelDatePicker,
    Separator,
} from "@/components/ui";
import MarkdownEditor from "@uiw/react-markdown-editor";

interface Props {
    children: React.ReactNode;
}

function MarkdownEditorDialog({ children }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col">
                    <DialogTitle>
                        <div className="flex items-center justify-start gap-2">
                            <Checkbox className="h-5 w-5 min-w-5" />
                            <input
                                type="text"
                                placeholder="게시물의 제목을 입력하세요."
                                className="text-xl outline-none bg-transparent"
                            />
                        </div>
                    </DialogTitle>
                    <DialogDescription>마크다운 에디터를 사용하여 TODO-BOARD를 예쁘게 꾸며보세요.</DialogDescription>
                </DialogHeader>
                {/* 캘린더 박스 */}
                <div className="flex items-center gap-5">
                    <LabelDatePicker label={"From"} />
                    <LabelDatePicker label={"To"} />
                </div>
                <Separator />
                {/* 마크다운 에디터 UI 영역 */}
                <MarkdownEditor className="h-[320px]" />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" variant={"outline"}>
                            취소
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg"
                    >
                        등록
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { MarkdownEditorDialog };
