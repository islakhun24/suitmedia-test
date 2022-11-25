import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModels } from 'src/app/models/response.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() detail!: DataModels
  src: string = ''
  constructor(private imageRef: ElementRef, private router: Router) {

   }

  ngOnInit(): void {
    this.getImageSrcFirst()
  }


  getImageSrcFirst(){
    const ele = document.createElement("div");
    ele.innerHTML = this.detail.content;
    const image: any = ele.querySelector("img");

    this.src =  image?.src
  }

  toDetail(e: Event):void{
    this.router.navigate(['/landing-page/detail-page', {detail: JSON.stringify(this.detail)}]);

  }
}
