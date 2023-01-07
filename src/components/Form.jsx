    import {useState, useEffect} from 'react'
    import { useContext } from 'react' 
    import TodoListContext from '../context/TodoContext'


  function Form(){

    const {updateFeedback,addFeedBack,feedbackEdit} = useContext(TodoListContext)

    const [message, setMessage] = useState('')
   

     const onChange =((e)=>{
  

      setMessage(e.target.value)
  
     })




     useEffect(()=>{
      if(feedbackEdit.edit === true){
        setMessage(feedbackEdit.message)
        
      }
    
   },[feedbackEdit])  





   













     
     const handleSubmit =(e)=>{
      e.preventDefault()
      if(message === ''){
        alert('fill in the box')
   }
      const newFeedBack = {
        message
      }
      if(feedbackEdit.edit === true){

        updateFeedback(feedbackEdit.id,  
          newFeedBack)
          feedbackEdit.edit=false
          
      }else{
        addFeedBack(newFeedBack)
      }

    
     
      setMessage('')
    }


    
  
   

  






    return(<div className='form'>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          id="message"
          value={message}
          placeholder='Add a todo'
          onChange={onChange}
          />
           
          <button className='btn' >Add Todo</button>
        </form>
        <div>
        
          
        </div>
        </div>)

  }




  export default Form