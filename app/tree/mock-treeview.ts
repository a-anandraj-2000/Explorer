import {TreeNode} from './treenode';

export var folderName : string[] = ["Ambrose","Anandraj","Shekinah","Nancy","Jeremy","Immaculate","Felcita","Sophia","Dominic","Gabirini"];
export var SubNodes: TreeNode[] =[];

    // Generate a Randome number to get different number of sub folders
    var num :number = Math.round(Math.random() * 10);
    
    
    for(let i=0;i<num;i++)
    {
        let obj =  new TreeNode(i.toString(),"folder","Ambrose");
        SubNodes.push(obj);
    }

