import { TodoActionTypes} from '../shared/enum/todo-action-types-enum';

export const initialState: any= "";

export function LoginReducer(state:any = initialState, action:any){
    // debugger;
    switch(action.type){
        case TodoActionTypes.Login:
            state = action.payload;///[...state, action.payload]
            return state;
        case TodoActionTypes.Logout:
            state = "";///[...state, action.payload]
            return state;
        default:
            return state;
    }
}

export function IsLoginFlagReducer(state:any = false, action:any){
    // debugger;
    switch(action.type){
        case TodoActionTypes.SetIsLoginFlag:
            state = action.payload;///[...state, action.payload]
            return state;
        default:
            return state;
    }
}