import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/AuthService';
import { AppErrorHandler } from './Common/AppErrorHandler';
import { StoreModule} from '@ngrx/store';
import { TodoReducer } from '../app/reducers/todo.reducers';
import { IsLoginFlagReducer, LoginReducer } from './reducers/login.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    // NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        // { path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', component: PageNotFoundComponent },
      ]
    ),
    StoreModule.forRoot(
      { 
        todos: TodoReducer, 
        loginuser: LoginReducer,
        isLoginFlag: IsLoginFlagReducer 
      }
    )
    // ,
    // AppBootstrapModule
  ],
  providers: [
    AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
