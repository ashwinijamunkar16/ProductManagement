import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = localStorage.getItem('user');

  constructor(private router: Router) { }
  Products = [
    {
      id: '1',
      details: 'HP 254444 CODFDS',
      price: '50000',
      src: 'https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=253fee8b29eb5274ee433b788e34ede3'
    },
    {
      id: '2',
      details: 'LG 254444 CODFDS',
      price: '70000',
      src: 'https://cdn.pastemagazine.com/www/articles/yoga910%20main.jpg'
    },
    {
      id: '3',
      details: 'Leveno 65754 CODFDS',
      price: '40000',
      src: 'https://cdn.pastemagazine.com/www/articles/yoga910%20main.jpg'
    },
    {
      id: '4',
      details: 'SONY 577744 CODFDS',
      price: '80000',
      src: 'https://cdn.pastemagazine.com/www/articles/yoga910%20main.jpg'
    }


  ]

  //to get prod details
  productDetails() {

    this.router.navigate(["/prodDetails"]);

  }

  addToCart(prodId: any) {
    if (this.user) {
    }
    else {
      this.router.navigate(['/login', { prod: prodId }]);
    }

  }
  ngOnInit(): void {
    // const user = localStordetails.getItem('user');
    // if (user === undefined || user === '' || user === null)
    // {
    //   this.router.navigate(['/login']);
    // }


  }
}
