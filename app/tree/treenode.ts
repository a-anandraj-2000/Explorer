export class TreeNode
{

    constructor(
            public id:string,
            private type:string,
            public folderName: string,
            public isOpen : boolean = false,
            
            )
{}
    



    getImage()
    {
        switch(this.type)
        {
            case "drive":
            return "drive.png";
            case "folder":
            return "folder.png";
            default:
            return "folder.png";
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