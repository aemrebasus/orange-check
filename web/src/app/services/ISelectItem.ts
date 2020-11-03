export interface ISelectItem {
    selectOne(id: number): void;
    deselectOne(id: number): void;
    selectAll(ids: number[]): void;
    deselectAll(): void;
    selectCurrent(id: number): void;
}
