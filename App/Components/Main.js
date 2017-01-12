import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Actions } from 'react-native-router-flux';
import * as colors from '../config/colors';
import { fetchPostsRequest, fetchPosts, clearPosts } from '../actions';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts();
    this.clear = this.clear.bind(this);
    this.refresh = this.refresh.bind(this);
    this.goToSpursFacts = this.goToSpursFacts.bind(this);
  }

  refresh() {
    this.props.fetchPostsRequest()
    .then(() => {
        this.props.fetchPosts();
    });
  }

  clear() {
    this.props.clearPosts();
  }

  goToSpursFacts() {
    console.log('GO TO SPURS FACTS');
    //Actions.spursFacts({ backTitle: 'Sample App' });
  }

  renderPost = ({ id, title, body }, i) => (
      <View
        key={id}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          <Text>
            {i + 1}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>
            {title}
          </Text>
          <Text style={styles.postBody}>
            {body}
          </Text>
        </View>
      </View>
  )

  render() {
    const { posts, loading, error } = this.props;
    const isAnimating = true;

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={isAnimating} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {posts.map(this.renderPost)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={this.refresh}
        >
          <Text>
            Refresh
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.clear}
        >
          <Text>
            Clear
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToSpursFacts}
        >
          <Text>
            Spurs Facts
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postTitle: {
    color: colors.text,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: colors.subText,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  }
});

const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error,
    posts: state.posts,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchPostsRequest, fetchPosts, clearPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
