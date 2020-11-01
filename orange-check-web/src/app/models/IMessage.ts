import { BaseEntity } from './BaseEntity';

/**
 * @fiend subject string
 * @field body string
 * @field from string
 */
export interface IMessage extends BaseEntity {
    subject: string;
    body: string;
    from: string;
}


