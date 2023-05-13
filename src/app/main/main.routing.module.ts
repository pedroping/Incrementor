import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowIncrementorComponent } from '../show-incrementor/show-incrementor.component';

const routes: Routes = [
  {
    path: '',
    component: ShowIncrementorComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
