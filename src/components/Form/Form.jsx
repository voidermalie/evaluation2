import './Form.css';

const Form = ({ formType }) => {
  return (
    <form onSubmit={() => {}}>
      {formType === 'post' && (
        <div className="add-post">
          <input type="text" placeholder="Votre titre..." name="post-title" />
          <input
            type="text"
            placeholder="Votre publication..."
            name="post-content"
          />
          <input type="submit" value="Ajouter" onSubmit={() => {}} />
        </div>
      )}
      {formType === 'comment' && (
        <div className="add-comment">
          <input
            type="text"
            placeholder="Dites-nous ce que vous en pensez"
            name="comment"
          />
          <input type="submit" value="Ajouter" onSubmit={() => {}} />
        </div>
      )}
    </form>
  );
};

export default Form;
