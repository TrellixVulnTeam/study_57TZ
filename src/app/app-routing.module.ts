import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registartion.component";
import { Russian11 } from "./russian/russian-1-1/russian-1-1.component";
import { Russian1 } from "./russian/russian-1/russian-1.component";
import { Russian21 } from "./russian/russian-2-1/russian-2-1.component";
import { Russian2 } from "./russian/russian-2/russian-2.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'russian1', component: Russian1},
    {path: 'russian1-1', component: Russian11},
    {path: 'russian2', component: Russian2},
    {path: 'russian2-1', component: Russian21},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }