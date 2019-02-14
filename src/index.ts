import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import { buildSchema } from 'type-graphql';

import { ChurchResolver } from './church-resolver';

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [ChurchResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve('/tmp/schema.gql'),
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    introspection: true,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(process.env.PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();