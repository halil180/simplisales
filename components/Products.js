import { Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../gql/Query";
import { useEffect, useState } from "react";
import { Card, Title, Divider } from "react-native-paper";
const Item = ({ id, description1, itemType, createdAt, pSize, barcode1 }) => (
  <Card style={{ margin: 20, padding: 20 }}>
    <Card.Title title={`Product id : ${id}`} subtitle={`Barcode:${barcode1}`} />
    <Card.Content>
      <Title>Type: {itemType}</Title>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Divider bold={true} />
    <Text>Description : {description1}</Text>
    <Divider bold={true} />
    <Text>Size : {pSize}</Text>
    <Divider bold={true} />
    <Text>Added at :{new Date(createdAt).toLocaleDateString()}</Text>
  </Card>
);
export default function Products({ query, index }) {
  const [limit, setLimit] = useState(5); //show ${limit} products at a time
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { index, limit, query },
  }); //execute query
  useEffect(() => {
    if (data) {
      console.log(data, "data");
    }
  }, [data]);
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      description1={item.description1}
      itemType={item.itemType}
      createdAt={item.createdAt}
      pSize={item.pSize}
      barcode1={item.barcode1}
    />
  );
  if (error) {
    <Text>an error has occurred</Text>;
  }
  //list products
  if (data) {
    // console.log(data.products.products)
    if (data.products.count == 0) {
      console.log("0 data");
      return (
        <Text style={styles.loading}>
          Your search - {query} - did not match any products.
        </Text>
      );
    }
    return (
      <FlatList
        data={data.products.products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
  if (loading) {
    return <Text style={styles.loading}> Loading...</Text>; //while loading return this
  }
  return <Text>no data found.</Text>;
}
const styles = StyleSheet.create({
  loading: {
    textAlign: "center",
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});