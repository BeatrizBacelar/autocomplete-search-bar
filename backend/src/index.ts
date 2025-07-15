import { ApolloServer } from 'apollo-server';
import suggestions from '../data/suggestionsAutoComplete.json' assert { type: "json" };


const typeDefs = `
  type Query {
    autoComplete(term: String!):  [String!]!
  }
`

const resolvers = {
  Query: {
    autoComplete: (_parent, { term }) =>
      suggestions.filter(suggestion => suggestion.toLowerCase().includes(term.toLowerCase())).slice(0, 20)
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );