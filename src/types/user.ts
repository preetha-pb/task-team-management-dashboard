export type UserRole = | "ADMIN" | "MANAGER" | "DEVELOPER" | "QA";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
}
