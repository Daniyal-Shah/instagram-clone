import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = ({ data }) => {
  return (
    <View style={styles.container}>
      <PostHeader userDP={data.userDP} userName={data.userName} />
      <PostBody postImage={data.postImage} />
      <PostFooter
        caption={data.caption}
        noViews={data.noViews}
        isLiked={data.isLiked}
        isSaved={data.isSaved}
        noComments={data.noComments}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
});
