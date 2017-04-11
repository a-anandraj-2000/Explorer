import {NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import{TreeViewComponent} from './tree/treeview.component';

@NgModule(
    {
    declarations:[AppComponent,TreeViewComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule]
    }
)
export class AppModule{}