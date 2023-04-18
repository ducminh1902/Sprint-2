import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.getAll().subscribe(next => {
      this.productList = next
    })
  }
}
