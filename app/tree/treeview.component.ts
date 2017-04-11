import {Component} from '@angular/core';
import {treenode} from './treenode';

@Component(
{
    selector:'tree-node',
    templateUrl:'./app/tree/treeview.component.html'
}
)
export class TreeViewComponent
{
    model = new treenode("1","drive","Root",["Ambrose","Anand"]);
}