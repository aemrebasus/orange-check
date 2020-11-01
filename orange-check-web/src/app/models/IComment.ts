import { BaseEntity } from './BaseEntity';

/**
 * @field text
 * @field from
 */
export interface IComment extends BaseEntity {
    text: string;
    from: string;
}

