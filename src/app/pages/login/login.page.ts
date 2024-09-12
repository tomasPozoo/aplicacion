import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variable
  usuario = new FormGroup({
    correo:  new FormControl('',[Validators.required,Validators.email]),
    clave:  new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }
  ///metodo ingresar
  ingresar(){

    if(this.usuario.controls.correo.value =='admin@admin.cl' && this.usuario.controls.clave.value == 'administrador'){
      this.router.navigate(['/home']);

    }else{
      this.mensajeAlerta();
    }
  }
   async mensajeAlerta(){
    const alert = await this.alertController.create({
      message:'ERROR AL INGRESAR'
    });
    alert.present();
  }





}
