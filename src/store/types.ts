// src/store/types.ts
export interface Item {
    id: number;
    name: string;
    value: number;
  }
  
  export interface RootState {
    items: Item[];
  }
  