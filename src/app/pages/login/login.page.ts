import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string=''
  contrasena:string=''

  constructor(private navCtrl:NavController,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  validar(){
    if (this.contrasena=="123" && this.usuario=="tomas") {
      localStorage.setItem("usuario",this.usuario)
      this.navCtrl.navigateForward(['/home'])
    } else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario o contraseña incorrecta',
      subHeader: '',
      message: 'usuario o contraseña incorrecta',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
