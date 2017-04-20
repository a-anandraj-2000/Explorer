"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = (function () {
    function TreeNode(id, type, folderName, isOpen) {
        if (isOpen === void 0) { isOpen = false; }
        this.id = id;
        this.type = type;
        this.folderName = folderName;
        this.isOpen = isOpen;
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
    TreeNode.prototype.getImageStatus = function () {
        if (this.isOpen) {
            return "arrow_down.png";
        }
        else {
            return "arrow_right.png";
        }
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
//# sourceMappingURL=treenode.js.map