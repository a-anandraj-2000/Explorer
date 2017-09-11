import{Injectable} from "@angular/core";
import{Http} from "@angular/http";
import{Grid} from "./Grid";

@Injectable()
export class GridService
{
    constructor(private http:Http){}

    getGridData(Id:string)
    {
        let url : string = "./app/data/grid_" + Id + ".json";

        return this.http.get(url)
        .map((data) => {return data.json()})
        .map(
            (nodes:Array<Grid>) =>
            {
                let result:Array<Grid> =[];
                if(nodes)
                {
                    nodes.forEach((node) =>
                    {
                        result.push(new Grid(node.Id,node.Name,node.Capital,node.Area,node.Language));
                    }
                    )
                    return result;
                }
            }
            ).catch((error) =>{console.log("File not found.");return []});
    }
}