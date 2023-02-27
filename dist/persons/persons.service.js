"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
let PersonsService = class PersonsService {
    create(createPersonInput) {
        return 'This action adds a new person';
    }
    findAll() {
        return `This action returns all persons`;
    }
    findOne(id) {
        return `This action returns a #${id} person`;
    }
    update(id, updatePersonInput) {
        return `This action updates a #${id} person`;
    }
    remove(id) {
        return `This action removes a #${id} person`;
    }
};
PersonsService = __decorate([
    (0, common_1.Injectable)()
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map