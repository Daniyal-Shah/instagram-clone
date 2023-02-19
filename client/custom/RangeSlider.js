import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, { SvgCss, Path, Circle, G, Text } from "react-native-svg";
export default class RangeSlider extends Component {
  static propTypes = {
    MaxRange: PropTypes.number.isRequired,
    MinRange: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    bgColor: PropTypes.string.isRequired,
    sliderColor: PropTypes.string.isRequired,
  };
  static defaultProps = {
    MaxRange: 100,
    MinRange: 1,
    width: 200,
    height: 200,
    bgColor: "#BF038A",
    sliderColor: "#fff",
  };

  constructor(props) {
    super(props);

    this.state = {
      shouldMove: true,
    };
  }
  render() {
    return (
      <Svg height="100" width="100">
        <Path d="M25" fill="none" stroke="red" />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // width: RangeSlider.propTypes.width,
    // height: RangeSlider.propTypes.height,
  },
});
