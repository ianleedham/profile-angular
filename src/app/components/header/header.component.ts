import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public state: { width: number; height: number };


  RAYS = 14;
  ANGLE = 180 / (this.RAYS - 1);


  // tslint:disable-next-line:variable-name
  private _circle = 'circle(${ this.state.width / 16}px at ${ this.state.width / 16}px ${ this.state.width / 16}px)';

  public get circle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this._circle);
  }
  constructor(private sanitizer: DomSanitizer) {

    this.state = {
      width:  800,
      height: 182
    };
  }
  ngOnInit(): void {
  }
  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions(): void {
    if (window.innerWidth < 500) {
      this.state = { width: 450, height: 102 };
    } else {
      const updateWidth  = window.innerWidth - 100;
      const updateHeight = Math.round(updateWidth / 4.4);
      this.state =  { width: updateWidth, height: updateHeight };
    }
  }

  /**
   * Add event listener
   */
  componentDidMount(): void {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

}
