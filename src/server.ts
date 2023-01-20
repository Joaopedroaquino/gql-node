import { ApolloServer } from "apollo-server";
import path from 'node:path'
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

async function bootstrap(){
    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })
    const server = new ApolloServer({
        schema
    })

    server.listen().then(({ url }) => {
        console.log(`Server running on ${url}`);
    })

}

bootstrap()