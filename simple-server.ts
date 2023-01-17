import { ApolloServer, gql } from 'apollo-server';
import { randomUUID } from 'node:crypto'

const typeDefs = gql`
type User {
    id: String!
    name: String!
}

type Query {
    users:[ String!]!
}

type Mutation {
    createUser(name: String!): String!

}

`

interface User {
    id: string
    name: string
}
const users: User[] = [];

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },
        Mutation: {
            createUser: (_, args) => {
                const user = {
                    id: randomUUID(),
                    name: args.name
                }
                console.log(args)
                users.push(user)

                return user
            }
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running on ${url}`);
})