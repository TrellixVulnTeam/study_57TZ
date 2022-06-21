import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registartion.component";
import { Russian11 } from "./russian/russian-1-1/russian-1-1.component";
import { Russian1 } from "./russian/russian-1/russian-1.component";
import { Russian2 } from "./russian/russian-2/russian-2.component";
import { Russian3 } from "./russian/russian-3/russian-3.component";
import { Russian4 } from "./russian/russian-4/russian-4.component";
import { Russian5 } from "./russian/russian-5/russian-5.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'russian1', component: Russian1},
    {path: 'russian1-1', component: Russian11},
    {path: 'russian2', component: Russian2},
    {path: 'russian3', component: Russian3},
    {path: 'russian4', component: Russian4},
    {path: 'russian5', component: Russian5},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }