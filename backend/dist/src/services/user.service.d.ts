import { UserCreate, UserLogin } from "../interfaces/user.interface";
export declare const userCreate: (payload: UserCreate) => Promise<{
    _id: string;
    name: string;
    email: string;
    role: import("../interfaces/user.interface").userRole;
    createdAt?: Date;
    updatedAt?: Date;
}>;
export declare const userLogin: (payload: UserLogin) => Promise<{
    user: {
        _id: string;
        name: string;
        email: string;
        role: import("../interfaces/user.interface").userRole;
        createdAt?: Date;
        updatedAt?: Date;
    };
    token: any;
}>;
