import { Button, Skeleton } from "@/components/ui";
import { FolderOpen, Heart } from "lucide-react";

function ImageCard() {
    return (
        <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
            <div className="relative flex flex-col gap-3">
                <Button
                    size={"icon"}
                    className="absolute top-2 right-4 z-10 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50"
                >
                    <FolderOpen className="h-5 w-5" />
                </Button>
                {/* Skeleton UI: 이미지 데이터가 렌더링 되기 전 */}
                <Skeleton className="w-[250px] h-[150px] rounded-xl" />
                <small className="w-full gap-1 text-s font-medium line-clamp-2">
                    조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한 설명란입니다. 조회한 이미지에 대한
                    설명란입니다.
                </small>
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between w-full">
                    {/* 게시일 */}
                    <div className="flex items-center gap-1 text-sm">
                        <span className="leading-7">게시일:</span>
                        2024-11-15
                    </div>
                    {/* 좋아요 수 */}
                    <div className="flex items-center gap-1 text-sm">
                        <Heart className="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
                        1,000
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ImageCard };
