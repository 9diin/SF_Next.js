"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";
import { Calendar as CalendarIcon } from "lucide-react";

interface Props {
    isReadOnly?: boolean;
}

function BasicDatePicker({ isReadOnly }: Props) {
    const [date, setDate] = useState<Date | undefined>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    disabled={isReadOnly} // "readOnly" 모드일 때 버튼 비활성화
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>날짜를 선택하세요.</span>}
                </Button>
            </PopoverTrigger>
            {!isReadOnly && (
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
            )}
        </Popover>
    );
}

export { BasicDatePicker };
