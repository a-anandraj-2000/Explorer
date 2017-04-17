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
var treenode_1 = require("./tree/treenode");
var treeview_service_1 = require("./tree/treeview.service");
var AppComponent = (function () {
    function AppComponent() {
        this.RootNode = new treenode_1.TreeNode("1", "drive", "Root");
        this.JSON = JSON;
        console.log("Component ctor");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'myExplorer-app',
        templateUrl: './app/app.component.html',
        providers: [treeview_service_1.TreeService]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map