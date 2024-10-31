import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { BellDot } from "lucide-react";

function CommonHeader() {
    return (
        <header className="w-full flex items-center justify-between">
            <div className="flex items-center gap-7">
                <SearchBar placeholder="티커, 이름으로 검색" />
                <p className="leading-7">2023년 9월 23일 오후 1시 21분 43초</p>
            </div>
            <div className="flex items-center gap-4">
                <Button variant={"outline"} size="icon">
                    <BellDot className="h-8 w-8" />
                </Button>
                <Avatar className="h-12 w-12 rounded-full cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="h-12 w-12 rounded-full" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
}

export { CommonHeader };
