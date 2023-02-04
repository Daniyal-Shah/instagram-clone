import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

const PostFooter = ({ caption, noViews, noComments, isLiked, isSaved }) => {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [like, setLike] = useState(isLiked);
  const [saved, setSave] = useState(isSaved);

  return (
    <View style={styles.container}>
      <View style={styles.reactionsContainer}>
        <View style={styles.firstReactionsContainer}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            {like ? (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={22}
                style={styles.reaction}
              />
            ) : (
              <MaterialCommunityIcons
                name="cards-heart"
                size={22}
                style={styles.likedReaction}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcons
              name="message-circle"
              size={22}
              style={styles.reaction}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcons name="send" size={22} style={styles.reaction} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => setSave(!saved)}>
            {saved ? (
              <FontAwesomeIcons
                name="bookmark"
                size={22}
                style={styles.reaction}
              />
            ) : (
              <FontAwesomeIcons
                name="bookmark-o"
                size={22}
                style={styles.reaction}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity>
          <Text style={styles.likeText}>{noViews} views</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.captionContainer}>
        {/* <TouchableOpacity> */}
        <Text style={styles.captionText}>
          {showFullCaption ? (
            caption
          ) : (
            <Text>
              {caption.slice(0, 47)}
              <Text
                style={styles.moreText}
                onPress={() => {
                  setShowFullCaption(true);
                }}
              >
                ...more
              </Text>
            </Text>
          )}
        </Text>
        {/* </TouchableOpacity> */}
      </View>

      <View style={styles.viewCommentsContainer}>
        <TouchableOpacity>
          <Text style={styles.viewCommentsText}>
            View all {noComments} comments{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  reactionsContainer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  firstReactionsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  reaction: {
    marginHorizontal: 4,
    color: "white",
  },
  likedReaction: { color: "red", marginHorizontal: 4 },

  likeContainer: {
    paddingHorizontal: 10,
  },
  likeText: {
    color: "white",
    fontWeight: "bold",
  },
  viewCommentsContainer: {
    paddingHorizontal: 10,
  },
  viewCommentsText: {
    color: "lightgray",
    fontSize: 12,
  },
  captionContainer: { padding: 10, marginBottom: 5 },
  captionText: {
    color: "white",
    fontSize: 12,
  },
  moreText: {
    color: "lightgray",
  },
});
