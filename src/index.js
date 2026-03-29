const { createYoga, createSchema } = require('graphql-yoga');
const { createServer } = require('http');

const yoga = createYoga({
  graphqlEndpoint: '/',
  schema: createSchema({
    typeDefs: `type Query { hello: String }`,
    resolvers: { Query: { hello: () => 'Hello World' } },
  }),
});

createServer(yoga).listen(4000, '0.0.0.0');
