import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Task } from "@/types"; // Task 타입 경로에 맞게 조정

function useTaskById(id: string | number) {
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("todos").select("*").eq("id", id);

            if (data && data.length > 0) {
                setTask(data[0]);
            }
        };
        getData();
    }, [id]);

    return { task };
}

export { useTaskById };
