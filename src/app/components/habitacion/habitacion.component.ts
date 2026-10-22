import { Component, input, output, SimpleChanges } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent {
  // inputs / outputs
  corrienteGeneral = input<boolean>(false);
  corrienteHabitacion = input<boolean>(false);
  persianaCerrada = input<boolean>(false);

  estadoPersiana = output<boolean>();
  estadoCorriente = output<boolean>();

  // propiedades
  titulo = 'HABITACION';
  corriente = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.corriente = this.corrienteGeneral() && this.corrienteHabitacion();
  }

  estado(): void {
    this.estadoCorriente.emit(this.corriente);
  }
}
