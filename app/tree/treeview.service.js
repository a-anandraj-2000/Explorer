"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var treenode_1 = require("./treenode");
exports.folderName = ["Ambrose", "Anandraj", "Shekinah", "Nancy", "Jeremy", "Immaculate", "Felcita", "Sophia", "Dominic", "Gabirini"];
var TreeService = (function () {
    function TreeService() {
    }
    TreeService.prototype.getSubfolders = function () {
        exports.SubNodes = [];
        var num = Math.round(Math.random() * 5);
        for (var i = 0; i < num; i++) {
            var obj = new treenode_1.TreeNode(i.toString(), "folder", exports.folderName[num + i]);
            exports.SubNodes.push(obj);
        }
        return exports.SubNodes;
    };
    return TreeService;
}());
TreeService = __decorate([
    core_1.Injectable()
], TreeService);
exports.TreeService = TreeService;
//# sourceMappingURL=treeview.service.js.map