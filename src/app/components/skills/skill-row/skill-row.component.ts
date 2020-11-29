import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.css']
})
export class SkillRowComponent implements OnInit {

  @Input() name: string;
  @Input() level: number;

  constructor() { }

  ngOnInit(): void {
  }

}
