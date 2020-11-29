import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills-column',
  templateUrl: './skills-column.component.html',
  styleUrls: ['./skills-column.component.css']
})
export class SkillsColumnComponent implements OnInit {
  @Input() columnTitle;
  @Input() skills;
  constructor() { }

  ngOnInit(): void {
  }

}
