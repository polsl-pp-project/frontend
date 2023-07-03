import { UserRole } from "./user-role";

export interface User {
    name?: string;
    lastName?: string;
    email?: string;
    role?: UserRole;
    password?: string;
    passwordConfirm?: string;
    customId?: string | undefined;
}