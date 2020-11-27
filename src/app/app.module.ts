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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
