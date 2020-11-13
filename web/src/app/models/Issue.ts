import { BaseEntity } from './BaseEntity';

/**
 * @field title string
 * @field description string
 * @field due string
 * @field assignee string
 * @field status new , inprogress, done or ignored.
 */
export interface Issue extends BaseEntity {
    title?: string;
    description?: string;
    due?: string;
    assignee?: string;
    status?: 'new' | 'inprogress' | 'done' | 'ignored';
}




