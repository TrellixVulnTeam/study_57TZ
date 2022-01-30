import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }