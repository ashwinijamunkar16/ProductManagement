import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedUser: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user === undefined || user === '' || user === null)
    {
      this.isloggedUser = false;
    }
    else
    {
      this.isloggedUser = true;
    }
  }

}
