import { Component, ViewChild, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'accordian',
  templateUrl: 'accordian.html'
})
export class AccordianComponent implements OnInit{

  accordianExpanded = false;
  @ViewChild('cc') cardComponent:any;


  constructor(public  renderer: Renderer2) {

  }

  ngOnInit(){
    // console.log(this.cardComponent.nativeElement);
    this.renderer.setStyle(this.cardComponent.nativeElement,"webkitTransition","max-height 500ms, padding 500ms");
  }

  toggleAccordian(){

    if(this.accordianExpanded){
      this.renderer.setStyle(this.cardComponent.nativeElement,"max-height","0px");
      this.renderer.setStyle(this.cardComponent.nativeElement,"padding","0px 16px");
    }else{
      this.renderer.setStyle(this.cardComponent.nativeElement,"max-height","500px");
      this.renderer.setStyle(this.cardComponent.nativeElement,"padding","13px 16px");
    }

    this.accordianExpanded = !this.accordianExpanded;

  }

}
