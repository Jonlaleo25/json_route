import React, { Component } from 'react';
import PostData from '../data/posts.json';
import './style.css';
import PostDetail from './PostDetail';
class PostList extends Component {
  render() {
    return (
      <div >
        <h1> Se ingresara  datos de json</h1>
        <nav>
          <ul>

        {PostData.map((item, index)=>{
          return (
            <div>
                <PostDetail post={item} key={`post-list-key ${index}`}/>
            </div>
          )
        })}
         </ul>
        </nav>
      </div>
    );
  }
}

export default PostList;
