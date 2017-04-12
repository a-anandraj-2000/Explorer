export class TreeNode
{

    constructor(
            private id:string,
            private type:string,
            private folderName: string,
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
}