import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loggedEntriesComponent } from './loggedEntries/loggedEntries.component';
import { IdentityComponent } from './identity/identity.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'LoggedEntries', component: loggedEntriesComponent,canActivate:[AuthGuard]},
  { path: 'login', component: IdentityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
