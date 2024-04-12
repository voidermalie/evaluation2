import './Form.css';

const Form = ({ formType }) => {
  return (
    <form onSubmit={() => {}}>
      {formType === 'post' && (
        <div className="add-post form">
          <input type="text" placeholder="Votre titre..." name="post-title" />
          <textarea
            placeholder="Votre publication..."
            name="post-content"
            rows="14"
            cols="56"
          ></textarea>
          <input type="submit" value="Ajouter" onSubmit={() => {}} />
        </div>
      )}
      {formType === 'comment' && (
        <div className="add-comment form">
          <textarea
            placeholder="Votre commentaire..."
            name="comment"
            rows="6"
            cols="20"
          ></textarea>
          <input type="submit" value="Ajouter" onSubmit={() => {}} />
        </div>
      )}
    </form>
  );
};

export default Form;
