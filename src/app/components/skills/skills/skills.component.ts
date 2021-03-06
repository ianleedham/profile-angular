import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  skills = {
    languages: [
      {
        name: 'MS SQL',
        level: 5,
      },
      {
        name: 'Type script',
        level: 8
      },
      {
        name: 'C#',
        level: 9
      },

    ],
    frameworks: [
      {
        name: '.Net core',
        level: 8
      },
      {
        name: '.Net Framework',
        level: 7
      },
      {
        name: 'Angular',
        level: 5
      }
    ],
    tools: [
      {
        name: 'Visual Studio',
        level: 8
      },
      {
        name: 'SSMS',
        level: 7
      },
      {
        name: 'Git',
        level: 9
      },
      {
        name: 'Docker',
        level: 6
      }
    ],
    concepts:
      [
        {
          name: 'SOLID',
          level: 6
        },
        {
          name: 'C# Design priciples',
          level: 5
        }
      ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
