import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.compenent';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MvvmdemoComponent } from './mvvmdemo/mvvmdemo.component';
import { ClassdemoComponent } from './classdemo/classdemo.component';
import { IteratordemoComponent } from './iteratordemo/iteratordemo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MvvmdemoComponent,
    ClassdemoComponent,
    IteratordemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IteratordemoComponent]
})
export class AppModule { }
