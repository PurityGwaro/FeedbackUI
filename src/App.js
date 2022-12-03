import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { FeedbackData } from "./data/FeedbackData"

export default function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) =>{
    // set the new array minus what is being deleted
    if(window.confirm('are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }
  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackList 
      handleDelete={deleteFeedback}
      feedback={feedback}/>
    </div>
    </>
  )
}
