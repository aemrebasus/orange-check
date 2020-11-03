import { BaseEntity } from './BaseEntity';

/**
 * @field firstName string
 * @field lastName: string;
 * @field email: string;
 * @field role: string;
 */
export interface IUser extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

