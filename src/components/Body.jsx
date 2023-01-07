import ListingItem from "./ListingItem"
import TodoListContext from '../context/TodoContext'
import { useContext } from 'react' 

    function Body({handleEdit}){

        const {feedbackDAta} = useContext(TodoListContext)
        
           if(!feedbackDAta || feedbackDAta.length === 0){
            return <p className="empty">no feed back yet</p>
           }
      return <div className="boxes">
                <ul className="list">  
               {feedbackDAta.map((item)=>(
                
                
                <ListingItem 
                            key={item.id}
                            id={item.id}
                             message={item.message} 
                             handleEdit={handleEdit}/>
               ))}
              </ul>
             </div>
        
     

    }
    export default Body