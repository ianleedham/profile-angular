import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string;
  public showExcerpt = false;

  constructor() { }

  ngOnInit(): void {
  }

  public mouseEnter(): void{
    this.showExcerpt = true;
  }

  public mouseLeave(): void{
    this.showExcerpt = false;
  }

}
