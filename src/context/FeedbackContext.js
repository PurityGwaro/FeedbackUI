import { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // children are all of our components that need access to the data
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    // item is what is being edited
    item: {},
    edit: false,
  });

  const [isLoading,setIsLoading] = useState(true)

  const addFeedback = async(newFeedback) => {
    const response = await fetch('/feedback',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
    // newFeedback.id = uuidv4();
    // setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback])
    // console.log(newFeedback);
  };

  const deleteFeedback = async(id) => {
    // set the new array minus what is being deleted
    if (window.confirm("are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`,{method:"DELETE"})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async(id,updatedItem)=>{
    const response = await fetch(`/feedback/${id}`,{method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(updatedItem)
  })
  const data = await response.json()
    setFeedback(feedback.map((item)=>(item.id === id ? {...item,...data} : item)))
  }

   // fetch feedback
   const fetchFeedback = async() => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data);
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchFeedback()
  },[])

 
  return (
    <FeedbackContext.Provider
      // any values/state are passed into the value prop
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
