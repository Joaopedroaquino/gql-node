import { ApolloServer } from "apollo-server";
import "reflect-metadata";

async function bootstrap(){
    const server = new ApolloServer({})

    server.listen().then(({ url }) => {
        console.log(`Server running on ${url}`);
    })

}

bootstrap()