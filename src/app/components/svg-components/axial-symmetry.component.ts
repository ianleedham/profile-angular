import { Component } from '@angular/core';

@Component({
  selector: 'app-axial-symmetry',
  template: `<ng-content></ng-content>
    <svg:g [ngStyle]="{'transform': 'scale(1, -1) rotate(180deg)'}"><ng-content></ng-content></svg:g>`
})
export class AxialSymmetryComponent {

  constructor() { }
}
