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
exports.Address = void 0;
const graphql_1 = require("@nestjs/graphql");
let Address = class Address {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id' }),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'rue' }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'ville' }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'pays' }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'code postal' }),
    __metadata("design:type", Number)
], Address.prototype, "zipcode", void 0);
Address = __decorate([
    (0, graphql_1.ObjectType)()
], Address);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map