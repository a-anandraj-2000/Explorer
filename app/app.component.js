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
var core_2 = require("@angular/core");
var treenode_1 = require("./tree/treenode");
var treeview_service_1 = require("./tree/treeview.service");
var grid_service_1 = require("./grid/grid.service");
var AppComponent = (function () {
    function AppComponent(_compiler) {
        this._compiler = _compiler;
        this.GridId = "9";
        this.RootNode = new treenode_1.TreeNode("1", "root", "Continent");
        this.Root = this;
        _compiler.clearCache();
        this.JSON = JSON;
        console.log("this is from app.component" + this.GridId);
    }
    AppComponent.prototype.UpdateChange = function () {
        console.log("Event Triggered on Change");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'myExplorer-app',
        templateUrl: './app/app.component.html',
        providers: [treeview_service_1.TreeService, grid_service_1.GridService]
    }),
    __metadata("design:paramtypes", [core_2.Compiler])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map