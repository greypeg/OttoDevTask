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