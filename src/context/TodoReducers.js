const TodoReducer = (state, action) =>{
  switch(action.type){
    case 'FEED_BACK_DATA' : 
    return{
        ...state,
        feedbackDAta: action.payload 
    }
    case 'Delete_FEED_BACK':
      return{
        ...state,
        feedbackDAta: action.payload 
      }
      case 'FEED_BACK_Edit':
        return{
          ...state,
          feedbackEdit: action.payload 
        }
        
          case 'UPDATE_Edit':
          return{
            ...state,
            feedbackDAta: action.payload 
          }
          

    default:
      return state
  }
}


export default  TodoReducer