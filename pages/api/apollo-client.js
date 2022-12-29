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