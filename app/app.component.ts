import{Component} from '@angular/core';
import{Compiler} from '@angular/core';
import {TreeNode} from './tree/treenode';
import {TreeService} from './tree/treeview.service';

@Component
({
    selector:'myExplorer-app',
    templateUrl:'./app/app.component.html',
    providers:[TreeService]
})
export class AppComponent{
 JSON: JSON;
 subfolders : TreeNode[];

    public constructor(private _compiler : Compiler)
    {
        _compiler.clearCache();
        this.JSON = JSON;
        //this.subfolders = this.treeService.getSubfolders();
    }
    RootNode : TreeNode = new TreeNode("1","drive","Root");
}