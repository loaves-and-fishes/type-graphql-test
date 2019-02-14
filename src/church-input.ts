import { Church } from './church-type';
import { InputType, Field } from 'type-graphql';

@InputType()
export class ChurchInput implements Partial<Church> {
  @Field()
  name: string;
}