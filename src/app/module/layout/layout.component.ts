import { Component, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    console.log(window.pageYOffset);
}

  constructor(private renderer2: Renderer2) {
     this.renderer2.listen('window', 'scroll', (e) => {
      console.log(e);

      console.log(this.getYPosition(e));
    });
  }

  ngOnInit() {

  }
  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

}
