
import React from 'react';
import App from '../components/App';
const { useState, useEffect } = React;

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      "mode": "cars",
      "credentials": "amit"
    }).then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return posts;
}

// App.js
import React from 'react';
import usePosts from './usePosts';

export default function App(){
  // usePosts() makes a request for us and returns an array of objects
  // call usePosts() function and assign the result to the posts variable
  const posts = usePosts()
  const renderedPosts = posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  })
  return (
    <div>
      <h3>Posts</h3>
      <ul>{renderedPosts}</ul>
    </div>
  )
}