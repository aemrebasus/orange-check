import { IconType } from 'ng-icon-type';

export interface ToolbarItem {
    id?: number;
    icon?: IconType;
    color?: string;
    tooltip?: string;
    action?: () => void;
    disabled?: boolean;
    tooltipPositon?: 'above' | 'below' | 'right' | 'left';
}

export interface Wrapper {
    toolbar?: ToolbarItem[];
}

/**
 * @description 4 Chain Toolbar builder
 */
export class ToolbarBuilder {

    private toolbar: ToolbarItem[] = [];
    private holder: ToolbarItem;

    constructor() { }

    newItem(id: number): ToolbarBuilder {
        if (this.holder) {
            this.toolbar.push({ ...this.holder });
        }
        this.holder = { id };
        return this;
    }

    icon(icon: IconType): ToolbarBuilder {
        this.holder = { ...this.holder, icon };
        return this;
    }

    tooltip(tooltip: string): ToolbarBuilder {
        this.holder = { ...this.holder, tooltip };
        return this;
    }

    action(action: () => void): ToolbarBuilder {
        this.holder = { ...this.holder, action };
        return this;
    }

    color(color: string): ToolbarBuilder {
        this.holder = { ...this.holder, color };
        return this;
    }

    disabled(): ToolbarBuilder {
        this.holder = { ...this.holder, disabled: true };
        return this;
    }

    getToolbar(): ToolbarItem[] {
        this.toolbar.push({ ...this.holder });
        const toolbar$ = this.toolbar;
        this.holder = null;
        this.toolbar = [];
        return [...toolbar$];
    }
}

