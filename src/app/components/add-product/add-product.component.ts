import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
];
  AddProductForm:FormGroup
  exellFileForm:FormGroup;
    excelProducts:Product[]=[]
     products:Product[]=[]
    constructor(private formBulider:FormBuilder){
      this.AddProductForm=formBulider.group({
        Name:['' ,[Validators.required]],
        Image:['' ,[Validators.required]],
        Amount:[''],
        Price:[''],
        Categories:['']
      });
    
     
      this.exellFileForm=formBulider.group({
        ExcelDataInput:['']
       })
    }
    async readExcel(e:any){
      const file = e.target.files[0];
      console.log(file)
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      console.log(workbook)
      this.excelProducts= XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
      console.log(this.excelProducts)
    }
    
  ngOnInit(): void {
   
  }

}
