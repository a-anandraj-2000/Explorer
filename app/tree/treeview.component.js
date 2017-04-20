"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var treenode_1 = require("./treenode");
var treeview_service_1 = require("./treeview.service");
var TreeViewComponent = (function () {
    function TreeViewComponent(treeService) {
        this.treeService = treeService;
        this.JSON = JSON;
    }
    TreeViewComponent.prototype.ShowSubNodes = function () {
        if (!this.Node.isOpen) {
            this.SubNodes = this.treeService.getSubfolders();
            this.Node.isOpen = true;
        }
        else {
            this.SubNodes = null;
            this.Node.isOpen = false;
        }
    };
    TreeViewComponent.prototype.getImage = function () {
    };
    return TreeViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", treenode_1.TreeNode)
], TreeViewComponent.prototype, "Node", void 0);
TreeViewComponent = __decorate([
    core_1.Component({
        selector: 'tree-node',
        templateUrl: './app/tree/treeview.component.html'
    }),
    __metadata("design:paramtypes", [treeview_service_1.TreeService])
], TreeViewComponent);
exports.TreeViewComponent = TreeViewComponent;
//# sourceMappingURL=treeview.component.js.map