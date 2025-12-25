import { useState, useEffect, useMemo } from "react";

import CommentList from "./CommentList";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

const API_URL = 'http://localhost:3001/comments';

const Comment = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(3);
  const [loading, setLoading] = useState(true);

  // Fetch comments từ JSON Server
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${API_URL}?movieId=${movieId}`);
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setLoading(false);
      }
    };

    fetchComments();
  }, [movieId]);

  // filter comments by movieId
  const movieComments = useMemo(() => {
    return comments.filter((comment) => comment.movieId === movieId);
  }, [comments, movieId]);

  const isMoreComment = movieComments.length > commentCount;
  const displayedComments = movieComments.slice(0, commentCount);

  // handle load more comments button
  const handleLoadMoreComment = () => {
    const newCount = commentCount + 4;
    setCommentCount(Math.min(newCount, movieComments.length));
  };

  // Handle khi thêm comment mới
  const handleCommentAdded = (newComment) => {
    setComments(prev => [...prev, newComment]);
  };

  if (loading) {
    return (
      <div className="comment-section">
        <p className="text-white">Đang tải bình luận...</p>
      </div>
    );
  }

  return (
    <div className="comment-section">
      <h3 className="text-[18px] text-white font-bold capitalize mb-3 mt-4">
        Bình luận ({movieComments.length})
      </h3>
      <div className="comment-list mb-5">
        <CommentList>
          {displayedComments.map((comment, index) => (
            <CommentItem
              key={comment.id || index}
              user={comment.user}
              text={comment.text}
              releaseDate={comment.date}
            />
          ))}
        </CommentList>
      </div>
      {isMoreComment && (
        <button
          onClick={handleLoadMoreComment}
          className="text-white bg-amber-300 px-4 py-2 capitalize mb-4"
        >
          xem thêm
        </button>
      )}

      <CommentForm movieId={movieId} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default Comment;
