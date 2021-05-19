import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SetLoginFlagAction, UserLogoutAction } from '../actions/todo.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedUser: boolean = false;
  loginUsername:string ="";
  constructor(private router: Router, private store: Store<{ isLoginFlag: any, loginuser: any }>) { }

  ngOnInit(): void {
    // debugger;
    this.store.pipe(select('isLoginFlag')).subscribe(values => {
      console.log(values);
      this.isloggedUser = values;
    });

    this.store.pipe(select('loginuser')).subscribe((values : any) => {
      // debugger
      if(values)
      {
        this.loginUsername = JSON.parse(values).username;
      }
    });
  }

  LogOutUser(){
    // debugger;
    localStorage.clear();    
    this.store.dispatch(new UserLogoutAction(""));
    this.store.dispatch(new SetLoginFlagAction(false));
    alert("User signout successfully.");
    this.router.navigate(['/login']);
  }

}
