import {Component,Input} from "@angular/core";
import{Grid} from "./grid";


@Component({
    selector:"grid-control",
    templateUrl:'./app/grid/grid.component.html'
})
export class GridComponent{

    @Input() GridId : string;
    GridData : Grid = new Grid("1","Ambrose Anandraj","42","Engineer");
}