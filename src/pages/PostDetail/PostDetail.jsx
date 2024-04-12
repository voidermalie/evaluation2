import Form from '../../components/Form/Form';
import './PostDetail.css';

const PostDetail = () => {
  return (
    <div id="post-detail-container">
      <section className="post-detail">
        <h2>Publication</h2>
        <h3>title</h3>
        <p>author</p>
        <p>content</p>
      </section>
      <section className="comment-list">
        <h2>Tous les commentaires</h2>
      </section>
      <section className="add-comment">
        <h2>Ajouter un commentaire</h2>
        <Form formType={'comment'} />
      </section>
    </div>
  );
};

export default PostDetail;
