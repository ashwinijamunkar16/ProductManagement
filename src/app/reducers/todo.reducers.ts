import { TodoActionTypes} from '../shared/enum/todo-action-types-enum';
import { ActionParents } from '../actions/todo.actions';
import { Todo } from '../models/todo';

export const initialState: Todo[] = [
    { title: 'Todo1'},
    { title: 'Todo2'},
    { title : 'Todo3'}
];

export function TodoReducer(state: any = initialState, action: any){
    switch (action.type){
        case TodoActionTypes.Add:
            return [...state, action.payload];
        default:
            return state;
    }
}