import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    // children are all of our components that need access to the data
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"this item is from context",
            rating:7
        },
        {
            id:2,
            text:"this item2 is from context",
            rating:5
        },
        {
            id:3,
            text:"this item3 is from context",
            rating:3
        }
    ])

    const [feedbackEdit,setFeedbackEdit]=useState({
        // item is what is being edited
        item:{},
        edit:false
    })

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
        console.log(newFeedback);
      }

    const deleteFeedback = (id) =>{
        // set the new array minus what is being deleted
        if(window.confirm('are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      }
const editFeedback =(item)=>{
    setFeedbackEdit({
        item,
        edit:true
    })
    
} 
    return <FeedbackContext.Provider
    // any values/state are passed into the value prop
    value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;