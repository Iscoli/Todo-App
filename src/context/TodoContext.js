
import {createContext,useReducer} from 'react'
import TodoReducer from './TodoReducers'
import {v4 as uuidv4} from 'uuid'
const TodoListContext = createContext()


export const TodoListProvider = ({children})=>{
  // const [feedbackDAta, setFeedbackDAta]= useState([])

 

  const initialState ={
    feedbackDAta:[],
    feedbackEdit:{ message:{}, id:{}, edit:false}
  }

  const [state, dispatch]= useReducer(TodoReducer,initialState)










  // Add feedback  function
  const addFeedBack = ((feedback)=>{
    feedback.id =  uuidv4()
    
    // setFeedbackDAta([feedback, ...feedbackDAta])
    
    const feedbackDat =[feedback, ...state.feedbackDAta]
    
    dispatch({
      type: 'FEED_BACK_DATA',
      payload:feedbackDat
    })
  })
   

  // Delete Feedback
  const deleteFeedBack=((id)=>{
    if(window.confirm('Are you sure')){
     const deletefeedback=( state.feedbackDAta.filter((item)=>
        item.id !== id
      ))
      
      dispatch({
        type: 'Delete_FEED_BACK',
        payload: deletefeedback
      })
    }

    
})


  // Edit feedback function
  const editFeedback =(id,message)=>{

    const editFeedBack=({
      message,
      id,
      edit:true
    })

    
    dispatch({
      type: 'FEED_BACK_Edit',
      payload:editFeedBack
    })


  
  }





  // Update feedback item


  const updateFeedback = (id, updItem)=>{
   
  const updFeedbackDAta=(
    state.feedbackDAta.map((item)=>(item.id === id ?
        {...item, ...updItem} : item))
    )
    dispatch({
      type: 'UPDATE_Edit',
      payload:updFeedbackDAta
    })
  }




  return <TodoListContext.Provider value={{
        ...state,
        dispatch,      
      addFeedBack,
      deleteFeedBack,
      editFeedback,
      updateFeedback,
      feedbackDAta: state.feedbackDAta,
      feedbackEdit: state.feedbackEdit
  }}>
      {children}
  </TodoListContext.Provider>
}



export default TodoListContext