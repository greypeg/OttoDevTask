import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = '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'

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        'Authorization': 'bearer ' + token
      },
    cache: new InMemoryCache(),
});

export default client;