import { BaseEntity } from './BaseEntity';

export interface Issue extends BaseEntity {
    title: string;
    description: string;
    due: string;
    assignee: string;
    status: 'new' | 'inprogress' | 'done' | 'ignored';
}




