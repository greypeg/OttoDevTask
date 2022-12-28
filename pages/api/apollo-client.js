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