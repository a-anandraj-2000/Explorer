import {Injectable} from '@angular/core';
import {TreeNode} from './treenode';
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


//export var folderName : string[] = ["Ambrose","Anandraj","Shekinah","Nancy","Jeremy","Immaculate","Felcita","Sophia","Dominic","Gabirini"];
export var SubNodes: TreeNode[];

@Injectable()
export class TreeService
{
    SubNodes : Array<TreeNode>;
    constructor(private http :Http){}
    getSubfolders(Id:string) 
    {
     let url : string = "./app/data/tree_" + Id + ".json";

     return this.http.get(url)
     .map((data) => {return data.json()})
     .map(
         (nodes:Array<TreeNode>) =>
         {
            let result:Array<TreeNode> =[];
            if(nodes)
            {
                nodes.forEach((node) =>
                {
                    result.push(new TreeNode(node.id,"folder",node.folderName));
                })
                return result;
            }
         }
         ).catch((error) => {console.log("File not found"); return []}); // return empty array

    // Generate a Randome number to get different number of sub folders
    // var num :number = Math.round(Math.random() * 5);
    // for(let i=0;i<num;i++)
    // {
    //     let obj =  new TreeNode(i.toString(),"folder",folderName[num + i]);
    //     SubNodes.push(obj);
    // }
      //  return SubNodes;
    }
}