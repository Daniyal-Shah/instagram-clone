import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import React from "react";

const Stories = () => {
  let data = [
    {
      image:
        "https://static.india.com/wp-content/uploads/2022/03/pjimage-48-1.jpg",
      name: "Shahrukh",
    },
    {
      image: "https://static.zoomnews.com/photo/msid-94072025/94072025.jpg",
      name: "Katrina Kaif",
    },
    {
      image:
        "https://yt3.googleusercontent.com/ytc/AL5GRJURWNCrgCv8EMvUy9IrK0BE8BGk7kMiU7qwdSgg=s900-c-k-c0x00ffffff-no-rj",
      name: "Salman",
    },
    {
      image:
        "https://www.bollywoodhungama.com/wp-content/uploads/2021/06/Kiara-Advani-opens-up-about-the-time-a-fan-climbed-27-floors-to-meet-her-1.jpg",
      name: "Kiara Advani",
    },
    {
      image:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/8/2022_8$largeimg_1791157113.JPG",
      name: "Amitabh",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View style={styles.storyContainer} key={index + "stories"}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.story}
            />
            <Text style={styles.storyText}>
              {item.name.length > 11
                ? item.name.slice(0, 10) + "..."
                : item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
    marginTop: 5,
    width: "100%",
  },

  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  storyText: {
    color: "white",
  },
});
