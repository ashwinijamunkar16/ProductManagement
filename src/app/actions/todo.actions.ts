import { Action } from '@ngrx/store';
import { TodoActionTypes} from '../shared/enum/todo-action-types-enum';

export class ActionParents implements Action {
    type: any;
    payload: any;
}

export class TodoAdd implements ActionParents{
    type: any =  TodoActionTypes.Add;
    constructor(public payload: any){}
}


export class SetLoginAction implements ActionParents{
    // debugger;
    type: any =  TodoActionTypes.Login;
    constructor(public payload: any){}
}

export class UserLogoutAction implements ActionParents{
    // debugger;
    type: any =  TodoActionTypes.Logout;
    constructor(public payload: any){}
}

// export class GetLoginAction implements ActionParents{
//     type: any =  TodoActionTypes.GetUser;
//     constructor(public payload: any){}
// }

export class SetLoginFlagAction implements ActionParents{
    // debugger;
    type: any =  TodoActionTypes.SetIsLoginFlag;
    constructor(public payload: any){}
}

// export class GetLoginFlagAction implements ActionParents{
//     type: any =  TodoActionTypes.GetIsLoginFlag;
//     constructor(public payload: any){}
// }