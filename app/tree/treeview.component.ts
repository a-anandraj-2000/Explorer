import {Component,Input} from '@angular/core';
import {TreeNode} from './treenode';
import {TreeService} from './treeview.service';

@Component(
{
    selector:'tree-node',
    templateUrl:'./app/tree/treeview.component.html'
}
)
export class TreeViewComponent
{
    JSON: JSON;
    @Input() Node : TreeNode;
    SubNodes : TreeNode[];

    public constructor(private treeService: TreeService) 
    {
        this.JSON = JSON;
        
        
    }
    
    
    ShowSubNodes()
    {
           // Make the current node status as Open
           if(!this.Node.isOpen)
           {
            this.SubNodes = this.treeService.getSubfolders();
            this.Node.isOpen = true;
           }
           else
           {
               this.SubNodes = null;
            this.Node.isOpen = false;
           }


        
        
    }

    getImage()
    {
        //this.Node.getImage()
    }
}