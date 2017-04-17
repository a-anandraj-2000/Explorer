import {Injectable} from '@angular/core';
import {TreeNode} from './treenode';

export var folderName : string[] = ["Ambrose","Anandraj","Shekinah","Nancy","Jeremy","Immaculate","Felcita","Sophia","Dominic","Gabirini"];
export var SubNodes: TreeNode[];

@Injectable()
export class TreeService
{
    getSubfolders() :TreeNode[]
    {
    SubNodes=[];
    // Generate a Randome number to get different number of sub folders
    var num :number = Math.round(Math.random() * 5);
    console.log("Randome number is " + num);
    for(let i=0;i<num;i++)
    {
        let obj =  new TreeNode(i.toString(),"folder",folderName[num + i]);
        SubNodes.push(obj);
    }
        return SubNodes;
    }
}