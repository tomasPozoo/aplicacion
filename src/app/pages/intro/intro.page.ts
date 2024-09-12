import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/login'])
    },1000)
  }

}
