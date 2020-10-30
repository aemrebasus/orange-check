import { BaseEntity } from './BaseEntity';

export interface IComment extends BaseEntity {
    text: string;
    from: string;
}

