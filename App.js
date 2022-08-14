import React from "react";
import { Text, StyleSheet, view, StatusBar } from "react-native";


// create a component that return some jsx / simple function
const App = () => {
  return (
    <view>
      import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0 via')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}
      </View>
  );
};
      


// Create a StyleSheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});


// export the file, so that we can use it elsewhere in our app
export default App;