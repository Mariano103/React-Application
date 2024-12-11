// src/store/reducers.ts
import { Action } from 'redux';

// Define action types
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

// Define the structure of each action
interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: {
      name: string; // Example payload property
    };
  }
  
  interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: number; // Assuming payload is the ID of the item
  }
  
  interface UpdateItemAction {
    type: typeof UPDATE_ITEM;
    payload: {
      id: number;
      updatedItem: {
        name: string; // Example updated properties
      };
    };
  }
  
  // Combine all action types into a union
  type AppAction = AddItemAction | RemoveItemAction | UpdateItemAction;
  
  // Initial state type
  type Item = {
    id: number;
    name: string;
    value: number;
  };

// Define action creators
export const addItem = (item: { name: string; value: number }) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id: number) => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const updateItem = (id: number, updatedItem: { name: string; value: number }) => ({
  type: UPDATE_ITEM,
  payload: { id, updatedItem },
});

// Define the initial state
const initialState: Item[] = [
  { id: 1, name: 'Item 1', value: 400 },
  { id: 2, name: 'Item 2', value: 300 },
  { id: 3, name: 'Item 3', value: 200 },
  { id: 4, name: 'Item 4', value: 100 },
];

// Reducer function to handle actions
export const itemsReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { id: Date.now(), ...action.payload }];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);
    case UPDATE_ITEM:
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload.updatedItem } : item
      );
    default:
      return state;
  }
};
