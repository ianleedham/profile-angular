import { Component } from '@angular/core';

@Component({
  selector: 'app-scene',
  template: `<svg
  viewBox="0 0 480 300"
  xmlns="http://www.w3.org/2000/svg"
  stroke-width=5
  fill="none"
  stroke="black">
  <ng-content></ng-content>
  </svg>`
})
export class SceneComponent {

  constructor() { }

}
