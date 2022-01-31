import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login.component";
import { StartComponent } from "./start/start.component";
import { RegistrationComponent } from "./auth/registartion.component";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        RouterModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent, 
        LoginComponent, 
        StartComponent,
        RegistrationComponent
    ],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})

export class AppModule { }