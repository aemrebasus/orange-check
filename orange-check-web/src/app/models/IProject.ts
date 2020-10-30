import { BaseEntity } from './BaseEntity';

export interface IProject extends BaseEntity {
    name: string;
    description: string;
}

