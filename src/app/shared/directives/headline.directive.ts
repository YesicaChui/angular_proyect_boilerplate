import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeadline]'
})
export class HeadlineDirective {

  constructor(private elementRef:ElementRef, private render:Renderer2) { 
    this.render.setStyle(this.elementRef.nativeElement,'font-size','20px')
    this.render.setStyle(this.elementRef.nativeElement,'text-align','center')
    this.render.setStyle(this.elementRef.nativeElement,'font-weight','bolder')
    this.render.setStyle(this.elementRef.nativeElement,'color','blue')
    this.render.setStyle(this.elementRef.nativeElement,'letter-spacing','5px')
    this.render.setStyle(this.elementRef.nativeElement, 'box-shadow', '2px 2px 4px rgba(0, 0, 0, 0.1)');

  }

}
