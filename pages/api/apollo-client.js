import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = 'token here'

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        'Authorization': 'bearer ' + token
      },
    cache: new InMemoryCache(),
});

export default client;