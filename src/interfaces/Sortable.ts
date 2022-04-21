export interface Sortable {
    swap(i: number, j: number): void;
    compare(i: number, j: number): boolean;
    length: number;
};
