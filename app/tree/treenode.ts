export class TreeNode
{

    constructor(
            public id:string,
            public type:string,
            public folderName: string,
            public isOpen : boolean = false,
            
            )
{}
    



    getImage()
    {
        switch(this.type)
        {
            case "root":
            return "earth.png";
            case "continent":
            return "continent.png";
            case "country":
            return "country.png";
            default:
            return "country.png";
        }
    }
    getImageStatus()
    {
        if(this.isOpen)
        {
            return "arrow_down.png";
        }
        else
        {
            return "arrow_right.png";
        }
    }
}