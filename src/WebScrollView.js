import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ScrollView, View, StyleSheet, Keyboard, TouchableOpacity, Text } from 'react-native';

export default class WebScrollView extends Component {
  constructor(props) {
    super(props);
    this.innerContainer = React.createRef();
    this.outerContainer = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const { onScroll } = this.props;

    const node = this.outerContainer.current;

    if (onScroll) {
      onScroll(node);
    }
  }

  scrollToOffset(options) {
    console.log('Not implemented');

    /*
    if (this.innerContainer && this.innerContainer.current && options) {
      this.innerContainer.current.scrollToOffset(options);
    }
    */
  }

  scrollToEnd = (animated = true) => {
    if (this.innerContainer && this.innerContainer.current) {
      this.innerContainer.current.scrollIntoView(false);
    }
  }

  renderItem =(item, index) => {
    const { renderItem } = this.props;
    return renderItem({ item, index });
  }

  render() {
    const { ListHeaderComponent, ListFooterComponent, data, inverted } = this.props;
    let messages = data;
    if (!inverted) {
      messages = data.slice().reverse();
    }
    return (
      <div style={styles.outerContainer} onScroll={this.handleScroll} ref={this.outerContainer}>
        <div style={styles.innerContainer} ref={this.innerContainer}>
          {ListHeaderComponent()}
          {messages.map(this.renderItem)}
          {ListFooterComponent()}
        </div>
      </div>
    );
  }
}

const styles = {
  outerContainer: {
    height: '100%',
    minHeight: '100%',
    width: '100%',
    overflow: 'auto',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    flex: 1,
    alignItems: 'stretch',
  },
};

WebScrollView.defaultProps = {
  data: [],
  extraData: {},
  onScroll: () => {},
  ListHeaderComponent: () => {},
  ListFooterComponent: () => {},
  inverted: false,
};

WebScrollView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  extraData: PropTypes.object,
  inverted: PropTypes.bool,
  renderFooter: PropTypes.func,
  keyExtractor: PropTypes.func,
  enableEmptySections: PropTypes.bool,
  automaticallyAdjustContentInsets: PropTypes.bool,
  contentContainerStyle: PropTypes.object,
  renderItem: PropTypes.func,
  onScroll: PropTypes.func,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
};
