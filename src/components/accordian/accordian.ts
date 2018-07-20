import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'accordian',
  templateUrl: 'accordian.html'
})
export class AccordianComponent implements OnInit{

  accordianExpanded = false;
  @ViewChild('cc') cardComponent:any;


  constructor() {

  }

  ngOnInit(){
    console.log(this.cardComponent.nativeElement);
  }

  toggleAccordian(){

  }

}
