/* eslint no-use-before-define: ["error", { "variables": false }], react-native/no-inline-styles: 0 */

import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import Color from './Color';

export default class LoadEarlier extends React.Component {

  renderLoading() {
    if (this.props.isLoadingEarlier === false) {
      return (
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.label}
        </Text>
      );
    }
    return (
      <View>
        <ActivityIndicator
          color="white"
          size="small"
          style={[styles.activityIndicator, this.props.activityIndicatorStyle]}
        />
      </View>
    );
  }
  render() {
    return (
      <View
        style={[styles.container, this.props.containerStyle]}
        onClick={() => {
          if (this.props.onLoadEarlier) {
            this.props.onLoadEarlier();
          }
        }}
        //disabled={this.props.isLoadingEarlier === true}
      >
        <View style={[styles.wrapper, this.props.wrapperStyle]}>
          {this.renderLoading()}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.defaultColor,
    borderRadius: 15,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.white,
    fontSize: 12,
  },
  activityIndicator: {
    marginTop: 0,
  },
});

LoadEarlier.defaultProps = {
  onLoadEarlier: () => { },
  isLoadingEarlier: false,
  label: 'Load earlier messages',
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  activityIndicatorStyle: {},
};

LoadEarlier.propTypes = {
  onLoadEarlier: PropTypes.func,
  isLoadingEarlier: PropTypes.bool,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  activityIndicatorStyle: ViewPropTypes.style,
};
