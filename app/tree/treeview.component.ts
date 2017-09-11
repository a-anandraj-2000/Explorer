import {Component,Input} from '@angular/core';
import {TreeNode} from './treenode';
import {TreeService} from './treeview.service';
import {GridService} from '../grid/grid.service'; 
import {Observable} from "rxjs/Rx";

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
    @Input() Root: any;
    //SubNodes : Observable<TreeNode[]>;
    SubNodes : TreeNode[];

    public constructor(private treeService: TreeService,private gridService : GridService) 
    {
        this.JSON = JSON;
    }
    
    getStyle() 
    {
        if(this.Node.type == "country")
        {
            return "hand";
        }
        return "";
    }
    LoadGrid()
    {
        // If it is not country then do nothing
        if(this.Node.type != "country")
        return;
        
        this.Root.GridId = this.Node.id;
        
        console.log("Load Grid for" + this.Root.GridId)
        this.Root.UpdateChange();

        // this.gridService.getGridData(this.Node.id)
        // .subscribe(res =>
        // {
            
        // }
        // )
    }
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

    getImage()
    {
        //this.Node.getImage()
    }
}