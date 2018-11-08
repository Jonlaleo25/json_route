import React, { Component } from 'react';
import PostData from '../data/posts.json';

class PostList extends Component {
  render() {
    return (
      <div >
        <h1> Se ingresara  datos e json</h1>
        {PostData.map((postDatail, index)=>{
          return <h1>{postDatail.title}</h1>
        })}
      </div>
    );
  }
}

export default PostList;
