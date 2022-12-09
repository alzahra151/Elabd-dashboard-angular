import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import Chart from 'chart.js/auto';
import { utils } from 'xlsx';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor( private formBilder: FormBuilder ,private ProductsService: ProductsService){

  }


public chart: any;

	ngOnInit(): void {

		this.createChart();

	}
	createChart() {

		this.chart = new Chart("MyChart5", {
			type: 'doughnut',
			 data : {
				labels: [
					'بحث',
					'تعديل',
					'إضافة',
					"إستعارة",
					"بحث"
				  ],
				  datasets: [{
					label: 'My First Dataset',
					data: [300, 50, 100 , 60 , 120],
					backgroundColor: [
					  'rgb(255, 99, 132)',
					  'rgb(54, 162, 235)',
					  'rgb(255, 205, 86)',
					  'rgb(75, 51, 126)',
					  'rgb(0, 128, 0)',

					],
					hoverOffset: 4
				  }]
			},
			options: {
				elements: {
				  line: {
					borderWidth: 1
				  }
				},
				
			  }
		})


	



		this.chart = new Chart("MyChart10", {
			type: 'radar',
			 data : {
				labels: [
					'الإستثمارات',
					'إجمالي',
					'رفض الكتب',
					'حذف الكتب',
					'تعديل الكتب',
					'إضافة الكتب',
				  ],
				  datasets: [{
					label: 'إضافة الكتب',
					data: [65, 59, 90, 81, 56, 55],
					fill: true,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgb(255, 99, 132)',
					pointBackgroundColor: 'rgb(255, 99, 132)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgb(255, 99, 132)'
				  },{
					label: 'إستعارة الكتب',
					data: [28, 48, 40, 19, 96, 27],
					fill: true,
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgb(54, 162, 235)',
					pointBackgroundColor: 'rgb(54, 162, 235)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgb(54, 162, 235)'
				  }]
			},
			options: {
				elements: {
				  line: {
					borderWidth: 1
				  }
				},
				
			  }
		})


		this.chart = new Chart("MyChart0", {
			type: 'line',
			data : {
				labels: ["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو"],
				datasets: [{
				  label: 'تحميل',
				  data: [20, 40, 80, 81, 56, 55, 30],
				  fill: false,
				  borderColor: 'rgb(255, 205, 86)',
				  tension: 0.1
				},
				{
					label: 'إضافة',
					data: [65, 59, 80, 81, 56, 80, 10],
					fill: false,
					borderColor: 'rgb(0, 128, 0)',
					tension: 0.1
				  },
				  {
					label: 'استعارة',
					data: [80, 70, 30, 81, 56, 20, 60],
					fill: false,
					borderColor: 'rgb(255, 99, 132)',
					tension: 0.1
				  }],
				
			  }
		})

	}
}

