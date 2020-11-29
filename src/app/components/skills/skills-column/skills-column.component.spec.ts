import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsColumnComponent } from './skills-column.component';

describe('SkillsColumnComponent', () => {
  let component: SkillsColumnComponent;
  let fixture: ComponentFixture<SkillsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
