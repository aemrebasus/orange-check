import { BaseEntity } from './BaseEntity';

export interface IUser extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

