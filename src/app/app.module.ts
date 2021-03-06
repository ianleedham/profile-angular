import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AxialSymmetryComponent } from './components/svg-components/axial-symmetry.component';
import {SceneComponent} from './components/svg-components/scene.component';
import {DrawnPathComponent} from './components/svg-components/drawn-path.component';
import {ScaledPathComponent} from './components/svg-components/scaled-path.component';
import {RadialSymmetryComponent} from './components/svg-components/radial-symmetry.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BriefComponent } from './components/brief/brief.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { SkillRowComponent } from './components/skills/skill-row/skill-row.component';
import { SkillsColumnComponent } from './components/skills/skills-column/skills-column.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AxialSymmetryComponent,
    SceneComponent,
    DrawnPathComponent,
    ScaledPathComponent,
    RadialSymmetryComponent,
    TopbarComponent,
    BriefComponent,
    SkillsComponent,
    SkillRowComponent,
    SkillsColumnComponent,
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
