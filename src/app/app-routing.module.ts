import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { MainComponent } from './pages/main/main.component';
import { InitGuradService } from './services/init-guard/init-gurad.service';

const routes: Routes = [
  { path: 'setup', component: SetupComponent, canActivate: [ InitGuradService ]},
  { path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [ InitGuradService ]
  },
  { path: 'main', redirectTo: '/main', pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: 'setup' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
