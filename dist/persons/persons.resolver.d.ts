import { PersonsService } from './persons.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
export declare class PersonsResolver {
    private readonly personsService;
    constructor(personsService: PersonsService);
    createPerson(createPersonInput: CreatePersonInput): string;
    findAll(): string;
    findOne(id: number): string;
    updatePerson(updatePersonInput: UpdatePersonInput): string;
    removePerson(id: number): string;
}
