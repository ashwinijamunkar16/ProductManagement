import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prodData: any;
  user = localStorage.getItem('user');
  constructor(private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.prodData = this.route.params["value"];
    console.log(this.prodData);
  }


  addToCart() {
    if (this.user) {
    }
    else {
      this.router.navigate(['/login', { prod: this.prodData.id }]);
    }

  }
}
