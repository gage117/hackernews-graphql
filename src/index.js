const { ApolloServer } = require('apollo-server');

// 1
const typeDefs = `
  type Query {
    info: String!,
    ranNum: Int!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    ranNum: () => Math.floor(Math.random() * 100)
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );