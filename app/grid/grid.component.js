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
var http_1 = require("@angular/http");
var grid_service_1 = require("./grid.service");
var GridComponent = (function () {
    function GridComponent(http, gridService) {
        this.http = http;
        this.gridService = gridService;
    }
    GridComponent.prototype.ngOnInit = function () {
        this.UpdateChange();
    };
    GridComponent.prototype.UpdateChange = function () {
        var _this = this;
        this.gridService.getGridData(this.GridId)
            .subscribe(function (res) {
            _this.GridData = res;
        });
    };
    return GridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GridComponent.prototype, "GridId", void 0);
GridComponent = __decorate([
    core_1.Component({
        selector: "grid-control",
        templateUrl: './app/grid/grid.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, grid_service_1.GridService])
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map