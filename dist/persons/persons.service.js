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
exports.PersonsService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PersonsService = class PersonsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPersonInput) {
        return this.prisma.person.create({ data: createPersonInput });
    }
    findAll() {
        return this.prisma.person.findMany();
    }
    findOne(id) {
        return this.prisma.person.findUniqueOrThrow({
            where: { id }
        });
    }
    update(id, updatePersonInput) {
        return this.prisma.person.update({
            where: { id },
            data: updatePersonInput,
        });
    }
    remove(id) {
        return this.prisma.person.delete({
            where: { id }
        });
    }
};
PersonsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map