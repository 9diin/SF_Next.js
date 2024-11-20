"use client";

import { BasicDatePicker } from "./date-picker";

interface Props {
    label: string;
    isReadOnly?: boolean;
}

function LabelDatePicker({ label, isReadOnly }: Props) {
    return (
        <div className="max-w-64 flex items-center gap-3">
            <small className="text-sm font-medium leading-none text-[#6D6D6D]">{label}</small>
            <BasicDatePicker isReadOnly={isReadOnly} />
        </div>
    );
}

export { LabelDatePicker };
