import {Component,Input,Output,EventEmitter} from '@angular/core';
import {TreeNode} from './treenode';
import {TreeService} from './treeview.service';
import {GridService} from '../grid/grid.service'; 
import {Observable} from "rxjs/Rx";

/*
    Author: Ambrose Anandraj
    Component: TreeView
    Description: This is a Tree Node Component which is responsible for single node in Tree View
*/

@Component(
{
    selector:'tree-node',
    templateUrl:'./app/tree/treeview.component.html'
}
)
export class TreeViewComponent
{
    JSON: JSON;
    // To pass the node for thier sub nodes
    @Input() Node : TreeNode;
    // To pass the Grid Id here so that we can load Grid data on click of each node
    @Input() Root: any;
    // Children of the current node
    SubNodes : TreeNode[];

    public constructor(private treeService: TreeService,private gridService : GridService) 
    {
        this.JSON = JSON;
    }
    
    // Method which will decide the cursor based on the Node Type
    getStyle() 
    {
        if(this.Node.type == "country")
        {
            return "hand";
        }
        return "";
    }


   // To load the grid value based on the selection of the node    
    LoadGrid()
    {
        // If it is not country then do nothing
        if(this.Node.type != "country")
        return;
        this.Root.GridId = this.Node.id;
        this.Root.UpdateChange();
    }
    // To load the Children for the current node
    ShowSubNodes()
    {
           // Make the current node status as Open
           if(!this.Node.isOpen)
           {
            this.treeService.getSubfolders(this.Node.id)
            .subscribe(res => 
                {   
                    this.SubNodes = res;
                }
            );
            this.Node.isOpen = true;
           }
           else
           {
                this.SubNodes = null;
                this.Node.isOpen = false;
           }
    }
}