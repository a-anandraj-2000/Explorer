import{Component} from '@angular/core';
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

    public constructor()
    {
        this.JSON = JSON;
        console.log("Component ctor");
        //this.subfolders = this.treeService.getSubfolders();
    }
    RootNode : TreeNode = new TreeNode("1","drive","Root");
}