import { UserRole } from "./user-role";

export class User {
    name?: string;
    lastName?: string;
    email?: string;
    role?: UserRole;
    password?: string;
    passwordConfirm?: string;
}