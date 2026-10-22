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

  persianaAbierta = output<boolean>();

  // propiedades
  titulo = 'HABITACION';
  hayCorriente = false;
  estadoPersiana = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.hayCorriente = this.corrienteGeneral() && this.corrienteHabitacion();
  }

  recibirEstadoPersiana(estado: boolean) {
    this.estadoPersiana = estado;
    this.persianaAbierta.emit(this.estadoPersiana);
  }
}
