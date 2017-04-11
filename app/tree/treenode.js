"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treenode = (function () {
    function treenode(id, type, folderName, subfolders) {
        this.id = id;
        this.type = type;
        this.folderName = folderName;
        this.subfolders = subfolders;
    }
    treenode.prototype.getImage = function () {
        switch (this.type) {
            case "drive":
                return "drive.png";
            default:
                return "folder.png";
        }
    };
    return treenode;
}());
exports.treenode = treenode;
//# sourceMappingURL=treenode.js.map