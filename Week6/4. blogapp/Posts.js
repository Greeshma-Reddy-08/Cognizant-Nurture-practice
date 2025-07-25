import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Load posts using Fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        this.setState({ hasError: true });
        console.error('Fetch error:', error);
      });
  }

  // Lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling hook
  componentDidCatch(error, info) {
    alert('An error occurred while rendering the component: ' + error);
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
