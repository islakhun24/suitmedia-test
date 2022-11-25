import { ResponseModels } from './../../models/response.model';
import { Component, HostListener, OnInit, ElementRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpParams } from '@angular/common/http';
import { IDEA } from '../../constants/enpoint.const';
import { SortModel } from '../../models/sort.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  imgUrl = 'https://www.cultura.id/wp-content/uploads/2022/02/The-Worst-Person-in-the-World-scaled.webp'

  response!: ResponseModels
  isLoading: boolean = false;

  page: number = 1
  size: number = 10
  sortObject: SortModel = {
    value: 'published_at',
    label: 'Newest'
  }

  arraySort: SortModel[] = [
    {
      value: 'published_at',
      label: 'Newest'
    },
    {
      value: '-published_at',
      label: 'Oldest'
    }
  ]


  constructor(private service: ApiService, private el: ElementRef) { }


  ngOnInit() {

    this.getData()

    this.initImageParalax()
  }

  getData(){
    this.isLoading = true
    let params = new HttpParams();
    params = params.append('page[number]', this.page);
    params = params.append('page[size]', this.size);
    params = params.append('sort', this.sortObject.value);

    this.service.getData(IDEA, params).subscribe((resp: any)=>{
      this.response = resp
      this.isLoading = false

    }, err=>{

      this.isLoading = false

    })
  }

  getPageSize(e:number):void {
    this.size = e
    this.getData()
  }

  getSort(e: SortModel): void {
    this.sortObject = e
    this.getData()
  }

  getPage(e:number):void {
    this.page = e
    this.getData()
  }

 initImageParalax(){

  //YOU can change image url from cms in here
  document.head.insertAdjacentHTML("beforeend", `<style>div.parallax:after{background-image: url("${this.imgUrl}")}</style>`)
  let element = this.el.nativeElement.getElementsByClassName('parallax')
  element[0].style.setProperty("backgroundImage", "url(https://www.cultura.id/wp-content/uploads/2022/02/The-Worst-Person-in-the-World-scaled.webp)");
 }
}
