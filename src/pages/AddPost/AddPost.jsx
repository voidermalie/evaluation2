import './AddPost.css';
import Form
 from '../../components/Form/Form';

const AddPost = () => {
  return (
    <div>
        <h2>Publier quelque chose</h2>
        <Form formType={'post'}/>
    </div>
  )
}

export default AddPost