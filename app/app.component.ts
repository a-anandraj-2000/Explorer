import{Component} from '@angular/core';
import{Compiler} from '@angular/core';
import {TreeNode} from './tree/treenode';
import {TreeService} from './tree/treeview.service';
import {GridService} from './grid/grid.service';

/*
    Author: Ambrose Anandraj
    Component: AppComponent
    Description: This is a App Component where we have two components TreeNode on left side and Grid on the right side
*/
@Component
({
    selector:'myExplorer-app',
    templateUrl:'./app/app.component.html',
    providers:[TreeService,GridService]
})
export class AppComponent{
    JSON: JSON;
    subfolders : TreeNode[];
    GridId : string="8";
    public constructor(private _compiler : Compiler)
    {
        _compiler.clearCache();
        this.JSON = JSON;
    }
    RootNode : TreeNode = new TreeNode("1","root","Continent");
}