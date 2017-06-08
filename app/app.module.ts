import {NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import{TreeViewComponent} from './tree/treeview.component';
import{GridComponent} from "./grid/grid.component";

@NgModule(
    {
    declarations:[AppComponent,TreeViewComponent,GridComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule]
    }
)
export class AppModule{}