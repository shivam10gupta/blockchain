import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { CoreService } from './core.service'
import { LoginComponent } from "./login/login.component";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        CoreService
    ],

})
export class CoreModule { }
