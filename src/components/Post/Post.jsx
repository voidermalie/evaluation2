import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post, isDetailPage }) => {
  return (
    <li className="post-item">
      {isDetailPage ? (
        <div>
          <h3>{post.title}</h3>
          <p>Publiée par {post.userId}</p>
          <p>{post.body}</p>
        </div>
      ) : (
        <Link to={`/post/${post.id}`}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      )}
    </li>
  );
};

export default Post;
