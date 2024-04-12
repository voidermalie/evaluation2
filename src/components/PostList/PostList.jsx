import './PostList.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../store/selector';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/slice/postSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return posts.length > 0 ? (
    <ul className='post-list'>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </ul>
  ) : (
    <p>Aucune publication</p>
  );
};
export default PostList;
