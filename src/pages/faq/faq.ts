import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  accordianExpanded = false;
  @ViewChild('cc') cardComponent:any;

  ngOnInit(){
    console.log(this.cardComponent.nativeElement);
  }

  ionViewDidLoad() {

  }

  toggleAccordian(){
    console.log("testing");
  }

}
