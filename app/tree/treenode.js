"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = (function () {
    function TreeNode(id, type, folderName) {
        this.id = id;
        this.type = type;
        this.folderName = folderName;
    }
    TreeNode.prototype.getImage = function () {
        switch (this.type) {
            case "drive":
                return "drive.png";
            case "folder":
                return "folder.png";
            default:
                return "folder.png";
        }
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
//# sourceMappingURL=treenode.js.map