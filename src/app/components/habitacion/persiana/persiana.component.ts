import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
})
export class PersianaComponent {
  // inputs / outputs
  hayCorriente = input.required<boolean>();
  estadoPersiana = output<boolean>();

  // propiedades
  titulo = 'PERSIANA';
  persianaAbierta = false;

  // eventos-dom
  onSubirBajarPersiana() {
    this.persianaAbierta = !this.persianaAbierta;
    this.estadoPersiana.emit(this.persianaAbierta);
  }
}
