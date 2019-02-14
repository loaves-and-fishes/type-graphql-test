import {
  Resolver,
  Query,
  Arg,
  Mutation,
} from 'type-graphql';
import { plainToClass } from 'class-transformer';
import nanoid from 'nanoid';

import { Church } from './church-type';
import { ChurchInput } from './church-input';
import { createChurchSamples } from './church-samples';

@Resolver(() => Church)
export class ChurchResolver {
  private readonly items: Church[] = createChurchSamples();

  @Query(() => Church, { nullable: true })
  async church(@Arg('name') name: string): Promise<Church | undefined> {
    return await this.items.find(church => church.name === name);
  }

  @Query(() => [Church], { description: "Get all the churches from around the world " })
  async churches(): Promise<Church[]> {
    return await this.items;
  }

  @Mutation(() => Church)
  async addChurch(@Arg("church") churchInput: ChurchInput): Promise<Church> {
    const church = plainToClass(Church, {
      id: nanoid(),
      name: churchInput.name,
    });
    await this.items.push(church);
    return church;
  }
}