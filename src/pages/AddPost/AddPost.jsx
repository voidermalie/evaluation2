import './AddPost.css';
import Form
 from '../../components/Form/Form';

 //J'ai commencé par 'addComment' et comme j'y suis pas arrivée j'ai pas commencé 'addPost' :'(((
const AddPost = () => {
  return (
    <div>
        <h2>Publier quelque chose</h2>
        <Form formType={'post'}/>
    </div>
  )
}

export default AddPost