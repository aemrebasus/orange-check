import { BaseEntity } from './BaseEntity';

export interface IMessage extends BaseEntity {
    subject: string;
    body: string;
    from: string;
}


