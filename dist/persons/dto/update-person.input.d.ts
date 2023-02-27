import { CreatePersonInput } from './create-person.input';
import { Gender } from "../gender.enum";
import { CreateAddressInput } from "../../addresses/dto/create-address.input";
declare const UpdatePersonInput_base: import("@nestjs/common").Type<Partial<CreatePersonInput>>;
export declare class UpdatePersonInput extends UpdatePersonInput_base {
    id: string;
    name: string;
    birthday: Date;
    gender: Gender;
    address: CreateAddressInput;
}
export {};
