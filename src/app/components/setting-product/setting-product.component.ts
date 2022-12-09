import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-setting-product',
  templateUrl: './setting-product.component.html',
  styleUrls: ['./setting-product.component.scss']
})
export class SettingProductComponent implements OnInit {
  Product:string="Product?skip=0&limit=10"
  products:Product[]=[]
  constructor(private productsService:ProductsService){

  }
  ngOnInit(): void {
   this.productsService.getAllProducts(this.Product).subscribe(products=>{
      this.products=products
   })
  }

}
