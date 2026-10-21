import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // propiedades
  title = 'proj-pers';
  titulo = 'CONTROL VIVIENDA';
  corrienteGeneral = false;
  corrienteHabitacion = false;

  // eventos-dom
  onConectarDesconectarVivienda(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    this.corrienteGeneral = !this.corrienteGeneral;
    conDes.innerHTML = this.corrienteGeneral ? 'Desconectar' : 'Conectar';
  }

  onConectarDesconectarHabitacion(event: Event) {
    let conDes = event.target as HTMLButtonElement;

    this.corrienteHabitacion = !this.corrienteHabitacion;
    conDes.innerHTML = this.corrienteHabitacion
      ? 'Desconectar habitación'
      : 'Conectar habitación';
  }
}
