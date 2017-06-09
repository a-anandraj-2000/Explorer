import {NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import{TreeViewComponent} from './tree/treeview.component';
import{GridComponent} from "./grid/grid.component";
import {HttpModule} from "@angular/http";

@NgModule(
    {
    declarations:[AppComponent,TreeViewComponent,GridComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,HttpModule]
    }
)
export class AppModule{}