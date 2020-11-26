import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scaled-path',
  templateUrl: './scaled-path.template.html'
})
export class ScaledPathComponent implements OnInit {

  @Input() duration: any;
  @Input() delay: any;
  @Input() x;
  @Input() y;
  @Input() d;

  constructor() { }

  ngOnInit(): void {
  }
}
