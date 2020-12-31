import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string;
  @Input() imageUrl: string;
  @Input() modalContent: TemplateRef<any>;
  @Input() overlayContent: TemplateRef<any>;

  public showExcerpt = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public mouseEnter(): void{
    this.showExcerpt = true;
  }

  public mouseLeave(): void{
    this.showExcerpt = false;
  }

  public open(): void {
    if (this.modalContent) {
      this.modalService.open(this.modalContent, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
    }
  }
}
