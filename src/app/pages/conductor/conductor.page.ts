import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor() { }
  iniciarViaje() {
    console.log('Viaje iniciado');
    // Aquí puedes agregar lógica para iniciar el viaje, como actualizar el estado en la base de datos.
  }

  // Función para terminar el viaje
  terminarViaje() {
    console.log('Viaje terminado');
    // Lógica para finalizar el viaje, enviar la información al servidor, etc.
  }
  ngOnInit() {
  }

}
