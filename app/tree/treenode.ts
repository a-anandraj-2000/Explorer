export class treenode
{

    constructor(
            private id:string,
            private type:string,
            private folderName: string,
            private subfolders:string[]
            )
    {}

    getImage()
    {
        switch(this.type)
        {
            case "drive":
            return "drive.png";
            default:
            return "folder.png";
        }
    }
}