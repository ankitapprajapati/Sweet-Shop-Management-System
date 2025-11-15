import { UserCreate, UserLogin } from '../interfaces/user.interface';
export declare const userCreate: (Paylaod: UserCreate) => Promise<import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").User> & import("../interfaces/user.interface").User & Required<{
    _id: string;
}>>;
export declare const userLogin: (Paylaod: UserLogin) => Promise<import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").User> & import("../interfaces/user.interface").User & Required<{
    _id: string;
}>>;
