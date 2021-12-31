import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes/app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
