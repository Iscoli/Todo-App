import { ReactComponent as EditIcon } from '../svg/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../svg/deleteIcon.svg'
import TodoListContext from '../context/TodoContext'
import { useContext } from 'react' 





    function ListingItem({message, id}){

      const {deleteFeedBack,editFeedback} = useContext(TodoListContext)


      return (
       <p className='paragraph' key={id}>{message} 
     
       <EditIcon
       className='removeIcon'
       fill='rgb(231, 76,60)'
       onClick={() =>editFeedback(id, message)}/>


      <DeleteIcon
       className='removeIcon'
       fill='rgb(231, 76,60)'
       onClick={() =>deleteFeedBack(id)}/>
       </p>
      

      )

    }


    export default ListingItem

    // <button   onClick={()=>handleDelete(id)}>x</button>