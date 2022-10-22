import { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {Provider as PaperProvider,Appbar,Searchbar} from "react-native-paper";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://simplisaleshw.cotunnel.com/graphql",
  cache: new InMemoryCache(),
});
export default function App() {
  const [query, setSearchQuery] = useState(""); //reactive query
  const [index, setIndex] = useState(1); //stores the index value
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Searchbar
            style={{ width: "100%" }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={query}
          />
          <Appbar.Header>
            <Appbar.Content title="simplisales" />
          </Appbar.Header>
          <StatusBar style="auto" />
          <Products
            query={query}
            setSearchQuery={setSearchQuery}
            index={index}
          />
          <Footer setIndex={setIndex} index={index} />
        </SafeAreaView>
      </PaperProvider>
    </ApolloProvider>
  );
}