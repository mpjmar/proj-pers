import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css',
})
export class PersianaComponent {
  // inputs / outputs
  estadoCorriente = input<boolean>();
  estadoPersiana = output<boolean>();

  // propiedades
  titulo = 'PERSIANA';
  persianaCerrada = false;

  // eventos-dom
  onSubirBajarPersiana(event: Event) {
    let subBaj = event.target as HTMLButtonElement;

    if (this.estadoCorriente()) {
    }
    subBaj.innerHTML = this.persianaCerrada
      ? 'Subir persiana'
      : 'Bajar persiana';
  }
}
