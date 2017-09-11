import{Component} from '@angular/core';
import{Compiler} from '@angular/core';
import {TreeNode} from './tree/treenode';
import {TreeService} from './tree/treeview.service';
import {GridService} from './grid/grid.service';

@Component
({
    selector:'myExplorer-app',
    templateUrl:'./app/app.component.html',
    providers:[TreeService,GridService]
})
export class AppComponent{
    JSON: JSON;
    subfolders : TreeNode[];
    GridId : string="9";
    public constructor(private _compiler : Compiler)
    {
        _compiler.clearCache();
        this.JSON = JSON;
        //this.GridId ="8";

        console.log("this is from app.component" + this.GridId);
        //this.subfolders = this.treeService.getSubfolders();
    }
    RootNode : TreeNode = new TreeNode("1","root","Continent");
    Root = this;

    UpdateChange()
    {
        console.log("Event Triggered on Change")
    }
    
}