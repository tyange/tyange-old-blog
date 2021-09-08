import React from "react";

import Post from "./post/Post";

import "./PostList.scss";

const PostList = (props) => {
  return (
    <div className="post-list">
      <ul>
        {props.readings.map((reading) => (
          <li key={reading.id}>
            <Post reading={reading.frontmatter} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;