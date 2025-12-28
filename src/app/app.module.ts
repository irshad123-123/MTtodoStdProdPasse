import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo/todo-form/todo-form.component';
import { TodoCardComponent } from './shared/component/todo/todo-card/todo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './shared/component/student/std-form/std-form.component';
import { StdDashComponent } from './shared/component/student/std-dash/std-dash.component';
import { ProdDashComponent } from './shared/component/product/prod-dash/prod-dash.component';
import { ProdCardComponent } from './shared/component/product/prod-card/prod-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { PassDashComponent } from './shared/component/passanger/pass-dash/pass-dash.component';
import { PassCardComponent } from './shared/component/passanger/pass-card/pass-card.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { RoutingModule } from './app-routing.modul';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoCardComponent,
    StdFormComponent,
    StdDashComponent,
    ProdCardComponent,
    ProdDashComponent,
    GetConfirmComponent,
    PassDashComponent,
    PassCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
