import { IconType } from 'ng-icon-type';

export interface ToolbarItem {
    id?: number;
    icon: IconType;
    tooltip?: string;
    action?: () => void;
    disabled?: boolean;
}

export interface Wrapper {
    toolbar?: ToolbarItem[];
}

