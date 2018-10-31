import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './authentication-guard.service';
import { HomeComponent } from './home/home.component';
import { NewRequestComponent } from './components/new-request/new-request.component';

const routes: Routes = [
  {
    path: '',
    // TODO: enabling the guard breaks inital navigation and no content is dispayed after loading
    // canActivate: [AuthenticationGuardService],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'NewRequest', component: NewRequestComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '' ,}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
