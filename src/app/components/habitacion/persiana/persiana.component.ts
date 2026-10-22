import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
})
export class PersianaComponent {
  // inputs / outputs
  estadoCorriente = input.required<boolean>();
  estadoPersiana = output<boolean>();

  // propiedades
  titulo = 'PERSIANA';
  persianaAbierta = false;

  // eventos-dom
  onSubirBajarPersiana(event: Event) {
    let subBaj = event.target as HTMLButtonElement;
    this.persianaAbierta = !this.persianaAbierta;

    if (this.estadoCorriente()) {
      subBaj.innerHTML = this.persianaAbierta
        ? 'Subir persiana'
        : 'Bajar persiana';
    }
    this.estadoPersiana.emit(this.persianaAbierta);
  }
}
