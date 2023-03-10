import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {PersonsService} from './persons.service';
import {Person} from './entities/person.entity';
import {CreatePersonInput} from './dto/create-person.input';
import {UpdatePersonInput} from './dto/update-person.input';

@Resolver(() => Person)
export class PersonsResolver {
    constructor(
        private personsService: PersonsService,
    ) {
    }

    @Mutation(() => Person)
    createPerson(@Args('createPersonInput') createPersonInput: CreatePersonInput) {
        return this.personsService.create(createPersonInput);
    }

    @Query(() => [Person], {name: 'persons'})
    findAll() {
        return this.personsService.findAll();
    }

    @Query(() => Person, {name: 'person'})
    findOne(@Args('id', {type: () => Int}) id: string) {
        return this.personsService.findOne(id);
    }

    @Mutation(() => Person)
    updatePerson(@Args('updatePersonInput') updatePersonInput: UpdatePersonInput) {
        return this.personsService.update(updatePersonInput.id, updatePersonInput);
    }

    @Mutation(() => Person)
    removePerson(@Args('id', {type: () => Int}) id: string) {
        return this.personsService.remove(id);
    }
}
