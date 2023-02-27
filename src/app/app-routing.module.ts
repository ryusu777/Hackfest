import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageComponent } from 'src/pages/component/component.component';
import { StartupPageComponent } from 'src/pages/startup/startup.component';

const routes: Routes = [
  { path: '', component: ComponentPageComponent },
  { path: 'startup', component: StartupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
