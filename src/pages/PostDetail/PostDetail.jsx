import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import './PostDetail.css';
import { selectComments } from '../../store/selector';
import { useEffect } from 'react';
import { fetchComments } from '../../store/slice/commentSlice';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  return (
    <div id="post-detail-container">
      <section className="post-detail">
        <h2>Publication</h2>
        <h3>title</h3>
        <p>author</p>
        <p>content</p>
      </section>
      <section className="comment-container">
        <h2>Tous les commentaires</h2>
        {comments.length > 0 ? (
          <ul className="comment-list">
            {comments.map((comment) => (
              <article key={comment.id} className="comment">
                <li>{comment.body}</li>
                <p>By <span className='comment-author-name'>{comment.name}</span></p>
              </article>
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire</p>
        )}
      </section>
      <section className="add-comment">
        <h2>Ajouter un commentaire</h2>
        <Form formType={'comment'} />
      </section>
    </div>
  );
};

export default PostDetail;
