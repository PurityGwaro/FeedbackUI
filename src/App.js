import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import { FeedbackData } from "./data/FeedbackData"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"


export default function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
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
  
  return (
    <Router>
    <Header/>
    <div className="container">
    <Routes>
     <Route exact path="/"
     element={
      <>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList 
      handleDelete={deleteFeedback}
      feedback={feedback}/>
      </>
     }
     >
     
     </Route>
      
      <Route exact path="/about" element={<AboutPage/>}/>
      </Routes>
      
    </div>
    <AboutIconLink/>
    </Router>
  )
}
