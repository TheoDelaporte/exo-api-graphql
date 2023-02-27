import { PersonsService } from './persons.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { AddressesService } from '../addresses/addresses.service';
export declare class PersonsResolver {
    private personsService;
    private addressesService;
    constructor(personsService: PersonsService, addressesService: AddressesService);
    createPerson(createPersonInput: CreatePersonInput): string;
    findAll(): string;
    findOne(id: number): string;
    updatePerson(updatePersonInput: UpdatePersonInput): string;
    removePerson(id: number): string;
}
