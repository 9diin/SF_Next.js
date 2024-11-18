import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Skeleton,
} from "@/components/ui";
import { AlignLeft, ClipboardPenLine, FolderOpen, Heart, Pin } from "lucide-react";

function ImageCard({ data }) {
    return (
        <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
            <div className="relative flex flex-col gap-3">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            size={"icon"}
                            className="absolute top-2 right-4 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50"
                        >
                            <FolderOpen className="h-5 w-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                            <DialogTitle>이미지 상세정보</DialogTitle>
                            <DialogDescription>선택한 이미지의 상세정보를 확인하세요.</DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-x-2 gap-3">
                            <Skeleton className="h-80 w-full rounded-xl" />
                            <div className="flex items-center justify-start w-full">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <small className="text-sm font-medium leading-none">스나이퍼팩토리</small>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center">
                                    <Pin className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">등대-근처의-한인-주택-JrUPwkbIIx8</span>
                                </div>
                                <div className="flex items-center">
                                    <ClipboardPenLine className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">등대-근처의-한인-주택-JrUPwkbIIx8</span>
                                </div>
                                <div className="flex items-center">
                                    <AlignLeft className="h-4 w-4 mt-[2px] mr-1" />
                                    <span className="text-sm">등대-근처의-한인-주택-JrUPwkbIIx8</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-end w-full gap-4">
                                <div className="flex items-center gap-1 text-sm">
                                    <p className="leading-7">게시일:</p>
                                    2024-11-15
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                    <Heart className="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                                    1,000
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                {/* Skeleton UI: 이미지 데이터가 렌더링 되기 전 */}
                <Skeleton className="w-[250px] h-[150px] rounded-xl" />
                <small className="w-full gap-1 text-s font-medium line-clamp-2">{data.alt_description}</small>
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between w-full">
                    {/* 게시일 */}
                    <div className="flex items-center gap-1 text-sm">
                        <span className="leading-7">게시일:</span>
                        {data.created_at}
                    </div>
                    {/* 좋아요 수 */}
                    <div className="flex items-center gap-1 text-sm">
                        <Heart className="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                        {data.likes}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ImageCard };
