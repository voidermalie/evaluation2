import { useDispatch, useSelector } from 'react-redux';
import './Form.css';
import { selectApiStatus, selectCommentContent, selectPostContent, selectPostTitle } from '../../store/selector';
import { addComment, refetchComments, setCommentContent } from '../../store/slice/commentSlice';
import { addPost, setPostContent, setPostTitle } from '../../store/slice/postSlice';

const Form = ({ formType, postId }) => {
  const dispatch = useDispatch();
  const apiStatus = useSelector(selectApiStatus);

  const title = useSelector(selectPostTitle);
  const content = useSelector(formType === 'post' ? selectPostContent : selectCommentContent)

  
  const isLoadingAddAction = (apiStatus.type === 'addPost' || apiStatus.type === 'addComment') && apiStatus.status !== 'fulfilled';

  const handleChange = (e, name) => {
    const { value } = e.target;
    if (formType === 'post') {
      if (name === 'post-title') {
        dispatch(setPostTitle(value));
      } else if (name === 'post-content') {
        dispatch(setPostContent(value));
      }
    } else if (formType === 'comment') {
      dispatch(setCommentContent(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'post') {
      if (title.trim() === '' || content.trim() === '') {
        return;
      }
      dispatch(addPost({ title, body: content }));
    } else if (formType === 'comment') {
      if (title.trim() === '') {
        return;
      }
      dispatch(addComment({ body: content, postId})),
      dispatch(refetchComments());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formType === 'post' && (
        <div className="add-post form">
          <input type="text" placeholder="Votre titre..." name="post-title" onChange={(e) => handleChange(e, 'title')} />
          <textarea
            placeholder="Votre publication..."
            name="post-content"
            rows="14"
            cols="56"
            onChange={(e) => handleChange(e, 'content')}
          ></textarea>
          <input type="submit" value="Ajouter" />
        </div>
      )}
      {formType === 'comment' && (
        <div className="add-comment form">
          <textarea
            placeholder="Votre commentaire..."
            name="comment"
            rows="6"
            cols="20"
            onChange={(e) => handleChange(e, 'content')}
          ></textarea>
          <input type="submit" value="Ajouter" disabled={isLoadingAddAction} />
          {
                isLoadingAddAction && <p>Processing...</p>
            }
        </div>
      )}
    </form>
  );
};

export default Form;
