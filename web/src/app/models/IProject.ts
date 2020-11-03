import { BaseEntity } from './BaseEntity';

/**
 * @field name string
 * @field description string
 */
export interface IProject extends BaseEntity {
    name: string;
    description: string;
}

