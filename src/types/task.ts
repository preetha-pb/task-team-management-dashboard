export type TaskStatus = | "TODO" | "IN_PROGRESS" | "COMPLETED" | "BLOCKED";

export type TaskPriority = | "LOW" | "MEDIUM" | "HIGH";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    assignedTo: string;
    dueDate: string;
    createdAt: string;
    
}