import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitGuradService } from 'src/app/services/init-guard/init-gurad.service';
import { SummaryComponent } from './summary.component';

const routes: Routes = [
  {
    path: '', component: SummaryComponent, canActivate: [InitGuradService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
