import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AxialSymmetryComponent } from './components/svg-components/axial-symmetry.component';
import {SceneComponent} from './components/svg-components/scene.component';
import {DrawnPathComponent} from './components/svg-components/drawn-path.component';
import {ScaledPathComponent} from './components/svg-components/scaled-path.component';
import {RadialSymmetryComponent} from './components/svg-components/radial-symmetry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AxialSymmetryComponent,
    SceneComponent,
    DrawnPathComponent,
    ScaledPathComponent,
    RadialSymmetryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
