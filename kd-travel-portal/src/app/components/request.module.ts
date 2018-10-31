
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewRequestComponent } from "./new-request/new-request.component";

//import { DropDownComponent } from "./drop-down/drop-dow.component";
import { RouterModule } from "@angular/router";
import { DropDownComponent } from "./drop-down/drop-dow.component";
import { ModelModule } from "../model.module";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "../home/home.component";

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [BrowserModule, FormsModule,RouterModule,ModelModule,HttpModule,ReactiveFormsModule, MatFormFieldModule],
  declarations: [NewRequestComponent,DropDownComponent,HomeComponent],
  exports: [NewRequestComponent,DropDownComponent,HomeComponent]
})
export class RequestModule { }