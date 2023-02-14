import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { RootState } from "../redux/store";
import { fakeStories, fakePosts } from "../utils/fakeData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  console.log("---------");
  console.log(currentUser);

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
