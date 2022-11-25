
import { Directive, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollTrackerDirective implements OnInit, OnDestroy{
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let tracker = event.target;
    const navbar: HTMLElement | null = document?.getElementById("navbar")
    console.log(event.target.scrollTop);

    if(event.target.scrollTop < 60){
      navbar!.style.backgroundColor = 'rgba(255, 102, 0, 0.4)'
    }else {
      navbar!.style.backgroundColor = '#ff6600ff'
    }
  }

  constructor(private element:ElementRef) {}
  ngOnDestroy(): void {
    const navbar: HTMLElement | null = document?.getElementById("navbar")

    navbar!.style.backgroundColor = 'rgba(255, 102, 0, 1)'
  }
  ngOnInit(): void {
    const navbar: HTMLElement | null = document?.getElementById("navbar")

    navbar!.style.backgroundColor = 'rgba(255, 102, 0, 0.4)'
  }
}
