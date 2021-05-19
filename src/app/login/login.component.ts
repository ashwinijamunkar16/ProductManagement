import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { Store } from '@ngrx/store';
import { SetLoginAction, SetLoginFlagAction } from '../actions/todo.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;

  constructor(private router: Router, 
    private authservice: AuthService,
    private store: Store<{ loginuser: any }>) {
  }

  signIn(Uservalues: any){
    // debugger;
    // this.invalidLogin = true;
    const TempContentType = 'application/x-www-form-urlencoded';
    const TempgrantType = 'password';
    if(Uservalues.username !== '' && Uservalues.password !== '')
    {
      const credentials = {
        username: Uservalues.username,
        password: Uservalues.password,
        ContentType: TempContentType,
        grant_type: TempgrantType
      };
      this.authservice.login(credentials)
      .subscribe((response: any) => {
        debugger;
        localStorage.setItem('user', JSON.stringify(response));
        if(response && response.access_token)
        {
            this.store.dispatch(new SetLoginAction(JSON.stringify(response)))
            this.store.dispatch(new SetLoginFlagAction(true));
            this.invalidLogin =  false;
            this.router.navigate(['/']);
        }
        else
        {
            this.store.dispatch(new SetLoginFlagAction(false));
            this.invalidLogin =  true;
        }
      },
      (error: any) => {
        if (error.statusText === 'Unknown Error')
        {
            alert('Service is temporarily down, please try after some time.');
            this.invalidLogin = true;
        }
        else
        {
          this.invalidLogin = true;
        }
        console.log(JSON.stringify(error));
      });
    }
    else
    {
      this.invalidLogin = true;
    }
  }

  ngOnInit(): void {
  }
}
