import './PostList.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { selectApiStatus, selectPosts } from '../../store/selector';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/slice/postSlice';
import Loader from '../Loader/Loader';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const apiStatus = useSelector(selectApiStatus);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const isPostsLoading =
    apiStatus.type === 'fetchPosts' && apiStatus.status !== 'fulfilled';

  return (
    <div>
      {isPostsLoading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <ul className="post-list">
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </ul>
      ) : (
        <p>Aucune publication</p>
      )}
    </div>
  );
};

export default PostList;
