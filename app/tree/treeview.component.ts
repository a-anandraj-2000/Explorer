import {Component,Input} from '@angular/core';
import {TreeNode} from './treenode';

@Component(
{
    selector:'tree-node',
    templateUrl:'./app/tree/treeview.component.html'
}
)
export class TreeViewComponent
{
    JSON: JSON;
    public constructor()
    {
        this.JSON = JSON;
    }
    
    @Input() Node : TreeNode;
    SubNodes : TreeNode[];
    ShowSubNodes()
    {
        this.SubNodes =  [new TreeNode("2","folder","Ambrose"),new TreeNode("3","folder","Anand")];
    }

    getImage()
    {
        //this.Node.getImage()
    }
}