import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdddatabaseComponent } from './add-database/add-database.component';
import { EditdatabaseComponent } from './edit-database/edit-database.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { TableContentViewComponent } from './table-content-view/table-content-view.component';
import { AddTableFormComponent } from './add-table-form/add-table-form.component';
import { ActiveModalComponent } from './active-modal/active-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdddatabaseComponent,
    EditdatabaseComponent,
    DynamicTableComponent,
    DatabaseViewComponent,
    TableContentViewComponent,
    AddTableFormComponent,
    ActiveModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
