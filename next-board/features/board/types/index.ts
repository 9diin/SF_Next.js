export interface Task {
    id: number;
    title: string;
    startDate: string | Date;
    endDate: string | Date;
    boards: BoardContent[];
}

export interface BoardContent {
    boardId: string | number;
    isCompleted: boolean;
    title: string;
    startDate: Date | string;
    endDate: Date | string;
    content: string;
}
