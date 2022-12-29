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