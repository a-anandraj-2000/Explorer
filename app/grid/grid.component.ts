import {Component,Input,OnInit} from "@angular/core";
import{Grid} from "./grid";
import{Http} from "@angular/http";
import{GridService} from "./grid.service"

@Component({
    selector:"grid-control",
    templateUrl:'./app/grid/grid.component.html'
})
export class GridComponent implements OnInit{

    @Input() GridId : string;
   //GridData : Grid = new Grid("1","Country Name","Capital","1234","English");
    GridData: Array<Grid>;
    //GridData: Array<Grid>=[new Grid("1","India","New Delhi","20000","Tamil"),new Grid("2","China","Beijing","20000","Chinese")];
    
constructor(private http:Http,private gridService :GridService)
{
    //console.log("Construnctor in Grid Component" + this.GridId);
    //let GridData : Array<Grid>=[];
    //GridData.push(new Grid("1","India","New Delhi","20000","Tamil"));
    //GridData.push(new Grid("2","China","Bejing","20000","Chinese"));
}
    
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gridService.getGridData(this.GridId)
        .subscribe(res =>
        {
            this.GridData = res;
        });
    console.log("This is from Grid Component On Init " + this.GridId);
}


}