import{Component} from '@angular/core';
import {TreeNode} from './tree/treenode';

@Component
({
    selector:'myExplorer-app',
    templateUrl:'./app/app.component.html'
    
})
export class AppComponent{
 JSON: JSON;
    public constructor()
    {
        this.JSON = JSON;
    }
    RootNode : TreeNode = new TreeNode("1","drive","Root");
}