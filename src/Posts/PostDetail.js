import React, { Component } from 'react';
import './style.css';

class PostDetail   extends Component {
  render() {
      const {post} = this.props;
    //   const post = this.props.post;
    return (
      <div >
        
                 <li>
                   <label>{post.title}</label>    
                   </li>
               
                  <label>{post.content}</label>
           
      </div>
    );
  }
}

export default PostDetail ;
