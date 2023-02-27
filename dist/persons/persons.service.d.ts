import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
export declare class PersonsService {
    create(createPersonInput: CreatePersonInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonInput: UpdatePersonInput): string;
    remove(id: number): string;
}
