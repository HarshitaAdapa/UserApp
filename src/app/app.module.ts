import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './app.material.module';



@NgModule({
  declarations: [
    AppComponent,
    UserValidationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    CommonMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
