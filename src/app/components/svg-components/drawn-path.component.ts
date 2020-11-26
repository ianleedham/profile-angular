import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawn-path',
  template: `<svg:path
            d="d",
            [ngStyle]="{
                 'strokeDashoffset': pathLength,
                 'strokeDasharray': pathLength,
                 'animation': 'draw' + duration + 's ease-out forwards ' + delay +'s'
             }"
        ></svg:path>`
})
export class DrawnPathComponent {

  @Input() public pathLength;
  @Input() public delay;
  @Input() public duration;
  @Input() public d;

  constructor() {
  }

}
