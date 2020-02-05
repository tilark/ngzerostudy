import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'setup', component: SetupComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'main', component: MainComponent},
  { path: '', pathMatch: 'full', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
