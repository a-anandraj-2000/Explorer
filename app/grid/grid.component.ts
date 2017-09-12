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
    GridData: Array<Grid>;
    

constructor(private http:Http,private gridService :GridService)
{
}

ngOnInit() {
    // This will help to load the Grid for the first time.
    this.UpdateChange();
}
// Method which will be called from the Tree Node to load the Grid Data
    UpdateChange()
    {
    this.gridService.getGridData(this.GridId)
        .subscribe(res =>
        {
            this.GridData = res;
        });
    }
}