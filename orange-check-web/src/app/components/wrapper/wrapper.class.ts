import { IconType } from 'ng-icon-type';

export interface ToolbarItem {
    id?: number;
    icon?: IconType;
    tooltip?: string;
    action?: () => void;
    disabled?: boolean;
}

export interface Wrapper {
    toolbar?: ToolbarItem[];
}
type ChainableMethodType = (icon: IconType) => (tooltip: string) => (action: () => void) => ToolbarBuilder;

/**
 * @description 4 Chain Toolbar builder
 */
export class ToolbarBuilder {
    private toolbar: ToolbarItem[] = [];

    /**
     * 4 chains --- id -> icon -> tooltip -> action
     */
    constructor() { }

    newItem(id: number): ChainableMethodType {
        return (icon) => (tooltip) => (action) => {
            this.toolbar.push({ id, icon, tooltip, action });
            return this;
        };
    }

    getToolbar(): ToolbarItem[] {
        const toolbar$ = [...this.toolbar];
        this.toolbar = [];
        return toolbar$;
    }
}

