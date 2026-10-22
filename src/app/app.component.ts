import { Component, input, output, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // inputs / outputs
  persianaAbierta = input.required();

  // propiedades
  title = 'proj-pers';
  titulo = 'CONTROL VIVIENDA';
  corrienteGeneral = false;
  corrienteHabitacion = false;
  estadoPersiana = false;

  // eventos-dom
  onConectarDesconectarVivienda() {
    this.corrienteGeneral = !this.corrienteGeneral;
  }

  onConectarDesconectarHabitacion(event: Event) {
    this.corrienteHabitacion = !this.corrienteHabitacion;
  }
}
