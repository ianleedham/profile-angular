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
        level: 8
      },
      {
        name: 'Dotnet core',
        level: 8
      },
      {
        name: 'Dotnet framework',
        level: 7
      }
    ],
    tools: [
      {
        name: 'Visual Studio',
        level: 8
      },
      {
        name: 'MS SQL management studio',
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
