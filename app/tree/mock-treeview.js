"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var treenode_1 = require("./treenode");
exports.folderName = ["Ambrose", "Anandraj", "Shekinah", "Nancy", "Jeremy", "Immaculate", "Felcita", "Sophia", "Dominic", "Gabirini"];
exports.SubNodes = [];
var num = Math.round(Math.random() * 10);
console.log("Before Objects created in mock");
for (var i = 0; i < num; i++) {
    var obj = new treenode_1.TreeNode(i.toString(), "folder", "Ambrose");
    exports.SubNodes.push(obj);
}
//# sourceMappingURL=mock-treeview.js.map