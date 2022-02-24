import React from 'react';
import { useSelector } from 'react-redux';
import Comment from '../../components/Comment/Comment';
import { getAllComments } from './allCommentsSlice';

const AllComments = (props) => {
  const { id } = props;
  const allComments = useSelector(getAllComments);
  //   console.log(allComments);

  let renderComments =
    allComments !== undefined
      ? allComments.map((commentList) =>
          id === commentList.id
            ? commentList.comments.map((comment, index) => (
                <Comment key={index} data={comment.data} />
              ))
            : null
        )
      : null;

  return <div className="comment-listing-container">{renderComments}</div>;
};

export default AllComments;
