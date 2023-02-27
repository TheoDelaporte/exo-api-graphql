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
exports.CreatePersonInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const gender_enum_1 = require("../gender.enum");
const create_address_input_1 = require("../../addresses/dto/create-address.input");
let CreatePersonInput = class CreatePersonInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'id de la personne' }),
    __metadata("design:type", Number)
], CreatePersonInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'nom de la personne' }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'date d\'anniversaire de la personne' }),
    __metadata("design:type", Date)
], CreatePersonInput.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'genre de la personne' }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => create_address_input_1.CreateAddressInput, { description: 'adresse de la personne' }),
    __metadata("design:type", create_address_input_1.CreateAddressInput)
], CreatePersonInput.prototype, "address", void 0);
CreatePersonInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePersonInput);
exports.CreatePersonInput = CreatePersonInput;
//# sourceMappingURL=create-person.input.js.map