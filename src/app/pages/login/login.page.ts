import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string=''
  pass: string;

  constructor(private navCtrl:NavController,
    private alertCtrl:AlertController,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
        const loading = await this.loadingController.create({
            message: 'Cargando.....',
            duration: 2000
        });

        const email = this.email;
        const pass = this.pass;

        const aux = await this.authService.login(email, pass);

        if (aux.user) {
            console.log('UID del usuario autenticado:', aux.user.uid); // Verifica el UID
            const usuarioLogin = await this.firestore.collection('usuarios').doc(aux.user.uid).get().toPromise();
            const usuarioData = usuarioLogin?.data() as Usuario;

            if (!usuarioData) {
                console.error('No se encontró información del usuario.');
                await Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se encontró información del usuario.',
                    confirmButtonText: 'OK',
                    heightAuto: false
                });
                return;
            }

            localStorage.setItem('usuarioLogin', email);

            await loading.present();
            setTimeout(async () => {
                await loading.dismiss();
                if (usuarioData.tipo === 'admin') {
                    this.router.navigate(['/admin']);
                } else if (usuarioData.tipo === 'usuario') {
                    this.router.navigate(['/home']);
                } else if (usuarioData.tipo === 'conductor') {
                    Swal.fire({
                        icon: 'info',
                        title: 'Login',
                        text: 'Detectamos que eres conductor, bienvenid@',
                        confirmButtonText: 'OK',
                        heightAuto: false
                    });
                    this.router.navigate(['/drivers']);
                }
            }, 2000);
        }
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al iniciar sesión.',
            confirmButtonText: 'OK',
            heightAuto: false
        });
        this.pass = '';
    }
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
