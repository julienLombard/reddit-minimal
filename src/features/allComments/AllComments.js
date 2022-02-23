import React from 'react';
import { useSelector } from 'react-redux';
import Comment from '../../components/Comment/Comment';
import { getAllComments } from './allCommentsSlice';

const AllComments = (props) => {
  const { id } = props;
  const allcomments = useSelector(getAllComments);
  //   console.log(allcomments);

  let renderComments =
    allcomments !== undefined
      ? allcomments.map((commentList) =>
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
