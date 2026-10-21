import { Component, input, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent {
  // inputs / outputs
  corrienteGeneral = input<boolean>();
  corrienteHabitacion = input<boolean>();
  estadoPersiana = output<boolean>();

  // propiedades
  titulo = 'HABITACION';
  estadoCorriente =
    this.corrienteGeneral() && this.corrienteHabitacion() ? 'ON' : 'OFF';
}
