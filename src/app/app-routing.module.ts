import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registartion.component";
import { StartComponent } from "./start/start.component";

import { Russian11 } from "./russian/russian-1-1/russian-1-1.component";
import { Russian1 } from "./russian/russian-1/russian-1.component";
import { Russian2 } from "./russian/russian-2/russian-2.component";
import { Russian3 } from "./russian/russian-3/russian-3.component";
import { Russian4 } from "./russian/russian-4/russian-4.component";
import { Russian5 } from "./russian/russian-5/russian-5.component";
import { Russian6 } from "./russian/russian-6/russian-6.component";
import { Russian7 } from "./russian/russian-7/russian-7.component";
import { Russian8 } from "./russian/russian-8/russian-8.component";
import { Russian9 } from "./russian/russian-9/russian-9.component";

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
    {path: 'russian6', component: Russian6},
    {path: 'russian7', component: Russian7},
    {path: 'russian8', component: Russian8},
    {path: 'russian9', component: Russian9},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }