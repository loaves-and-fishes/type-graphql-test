import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'Object representing a church' })
export class Church {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  // @Field({ nullable: true, description: "The recipe description with preparation info" })
  // description?: string;

  // @Field(type => [Int])
  // ratings: number[];

  // @Field()
  // creationDate: Date;

  // @Field(type => Int)
  // ratingsCount: number;

  // @Field(type => Float, { nullable: true })
  // get averageRating(): number | null {
  //   const ratingsCount = this.ratings.length;
  //   if (ratingsCount === 0) {
  //     return null;
  //   }
  //   const ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
  //   return ratingsSum / ratingsCount;
  // }
}