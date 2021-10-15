import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckuk42wtt28wy01z04r2b4h1y/master",
  cache: new InMemoryCache(),
});

export default client;
