import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
