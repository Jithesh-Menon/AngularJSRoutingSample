import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/First', pathMatch: 'full'},
  { path: 'First', component : FirstComponentComponent},
  { path: 'Second', component: SecondComponentComponent },
  { path: 'Third', component: ThirdComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
