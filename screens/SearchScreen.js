import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fakePosts, fakeStories } from "../utils/fakeData";
import UserItem from "../components/search/UserItem";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        frontIcon={"search1"}
        backIcon="close"
        placeholder="Search"
        value={search}
        setText={setSearch}
      />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 10 }}
      >
        {fakeStories.map((item) => (
          <UserItem userDP={item.image} userName={item.name} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});
