import { Component, input, output, SimpleChanges } from '@angular/core';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // propiedades
  title = 'proj-pers';
  titulo = 'CONTROL VIVIENDA';
  corrienteGeneral = false;
  corrienteHabitacion = false;
  persianaAbierta = false;

  // eventos-dom
  onConectarDesconectarVivienda() {
    this.corrienteGeneral = !this.corrienteGeneral;
  }

  onConectarDesconectarHabitacion() {
    this.corrienteHabitacion = !this.corrienteHabitacion;
  }

  recibirEstadoPersiana(estado: boolean) {
    this.persianaAbierta = estado;
  }
}
