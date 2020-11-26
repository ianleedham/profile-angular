import {Component, Input, OnInit} from '@angular/core';

/*Array.from({ length: repeat }, (_, index) =>
  React.Children.map(children, kid => (
    <g style={{ transform: `rotate(${offset + angle * index}deg)` }}>{kid}</g>
))
);*/

@Component({
  selector: 'app-radial-symmetry',
  template: `
    <g *ngFor="let section of repeater; index as index;" [ngStyle]="{transform: 'rotate(' + offset + angle * index + 'deg)'}"><ng-content></ng-content></g>`
})
export class RadialSymmetryComponent implements OnInit {

  @Input() repeat;
  @Input() public angle;
  public offset = 0;

  public get repeater(): Array<any> {
    return Array(this.repeat);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
