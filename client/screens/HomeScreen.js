import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { fakeStories, fakePosts } from "../utils/fakeData";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView>
        <Stories data={fakeStories} />
        {fakePosts.map((item) => (
          <Post data={item} key={"pot-" + item.userName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    // paddingTop: 40,
    // justifyContent: "center",
  },
});
