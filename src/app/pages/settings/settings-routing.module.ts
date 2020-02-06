import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { InitGuradService } from 'src/app/services/init-guard/init-gurad.service';


const routes: Routes = [
  { path: '', component: SettingsComponent, canActivate: [InitGuradService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
