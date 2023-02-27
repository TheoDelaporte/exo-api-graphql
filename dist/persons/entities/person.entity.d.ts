import { Gender } from "../gender.enum";
import { CreateAddressInput } from "../../addresses/dto/create-address.input";
export declare class Person {
    id: number;
    name: string;
    birthday: Date;
    gender: Gender;
    address: CreateAddressInput;
}
