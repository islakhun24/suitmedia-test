import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private el:ElementRef) {

   }

  ngOnInit(): void {
    const menu: HTMLCollection = this.el.nativeElement.getElementsByClassName('nav-item')



    for (let index = 0; index < menu.length; index++) {
      const element = menu[index]
      element.addEventListener("click", (e: any) => {
				this.indicator(e.target);
			})
    }
    this.init()
  }

  init(){
    const menu = this.el.nativeElement.getElementsByClassName('nav-item')
    const indicator = this.el.nativeElement.getElementsByClassName('nav-indicator')
    indicator[0].style.left = menu[0].offsetLeft + 'px';
    indicator[0].style.width = menu[0].offsetWidth + 'px';
  }

  indicator(e: any) {
    const indicator = this.el.nativeElement.getElementsByClassName('nav-indicator')
    indicator[0].style.left = e.offsetLeft + 'px';
    indicator[0].style.width = e.offsetWidth + 'px';
  }
}
