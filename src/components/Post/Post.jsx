import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <li className='post-item'>
      <Link to={`/post/${post.id}`}>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </Link>
    </li>
  );
};

export default Post;
