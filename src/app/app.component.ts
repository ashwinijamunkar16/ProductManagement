import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetLoginAction, SetLoginFlagAction } from '../app/actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductManagement';

  constructor(private router: Router, private store: Store<{ loginuser: any }>){
    // debugger;
    const user = localStorage.getItem('user');
    if (user === undefined || user === '' || user === null)
    {
      this.store.dispatch(new SetLoginFlagAction(false));
      this.router.navigate(['/login']);
    }
    else if(user && JSON.parse(user).access_token)
    {
      this.store.dispatch(new SetLoginAction(user))
      this.store.dispatch(new SetLoginFlagAction(true));
      this.router.navigate(['/']);
    }
  }
}
