import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddatabaseComponent } from './add-database/add-database.component';
import { EditdatabaseComponent } from './edit-database/edit-database.component';
import { HomeComponent } from './home/home.component';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { TableContentViewComponent } from './table-content-view/table-content-view.component';
import { AddTableFormComponent } from './add-table-form/add-table-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {
    path: 'view-database', component: DatabaseViewComponent
  },
  {
    path: 'view-table',
    component: TableContentViewComponent
  },
  { path: 'add-new-table', component: AddTableFormComponent },
  { path: 'Adddatabase', component: AdddatabaseComponent },
  { path: 'Editdatabase/:database', component: EditdatabaseComponent },
  { path: 'edit-table/:database', component: EditdatabaseComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }