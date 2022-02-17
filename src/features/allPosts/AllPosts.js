import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import { getAllPosts } from './allPostsSlice';

const AllPosts = () => {
  const allposts = useSelector(getAllPosts);
  console.log(allposts);

  let renderPosts =
    allposts !== undefined ? (
      allposts.map((post, index) => <Post key={index} data={post.data} />)
    ) : (
      <div>
        <h3>Error</h3>
      </div>
    );

  return <div>{renderPosts}</div>;
};

export default AllPosts;
